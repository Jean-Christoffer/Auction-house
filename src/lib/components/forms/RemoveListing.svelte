<div class="w-full max-w-xs  ">
 
    <form on:submit|preventDefault={Remove} class="  px-8 pt-6 pb-8 mb-4 customBg">

        <Button buttonText="Remove listing"/>
     
    </form>

    <div class="mt-2">
        <Snackbar
            message={currentErr}
            show={showSnackBar}
            isSuccess={isSuccess} 
            status={isStatus} />
    </div>
</div>
<script>
    
    import Button from "../uiComponents/Button.svelte";
    import Snackbar from "../uiComponents/Snackbar.svelte";
    import {authStore } from "$lib/data/authstore"
    import { goto } from '$app/navigation';

    export let auctionId = ""




    let isSuccess = true
    let currentErr = null
    let showSnackBar = false
    let isStatus = "Success"






    const Remove = () => {
        fetch(`https://api.noroff.dev/api/v1/auction/listings/${auctionId}`,{
            method:"DELETE",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${$authStore.token}`
            }

        })
        .then((res) => {
            if(res.status < 299){
      
                return res.json()
               

            }
            if(res.status > 299){
         
                currentErr = "something went wrong"
            }
        })
        .then((data) => {
            if(data){
                console.log(data)
                currentErr ="Listing removed!"
                isSuccess=true
                showSnackBar = true
                isStatus="Success"

            }
        })
        .catch((err) => {
            currentErr = err
            console.log("Something horrible went wrong :O",err)
        }).finally(() => {
            goto('/profile')
        });

    }
</script>
<style lang="postcss">
    .customBg{
        background-color: #F2F2F2;
    }
    .customWidth{
        max-width: 250px;
        width: 100%;
    }
</style>