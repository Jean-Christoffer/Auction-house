<div class="w-full max-w-xs my-2">

  
    <form on:submit|preventDefault={Bid} class=" rounded px-8 pt-6 pb-8 mb-4  customBg shadow-md">
        <div class="mb-4">
            <label for="amount" class="block text-gray-700 text-sm font-bold mb-2">
                Amount
                <input
                type="number"
                id="amount"
  
                bind:value={amount}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
                 {#if amount < amountToBid + 1}
                    <p class="text-red-500 text-xs italic">Bid must be more than ${amountToBid}</p>
                {/if}
            </label>
        </div>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="Place bid" isDisabled={amount > amountToBid  ? false : true }  />
            </div>        
        </div>
     
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
    import { page } from '$app/stores'

    export let id = ""
    export let amountToBid = 0
    let amount = 0

 

    let isSuccess = true
    let currentErr = null
    let showSnackBar = false
    let isStatus = "Success"


    const Bid = () => {
        fetch(`https://api.noroff.dev/api/v1/auction/listings/${id}/bids`,{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${$page.data.token}`
            },
            body:JSON.stringify({
                amount:amount
         
            })
        })
        .then((res) => {
            if(res.status < 299){
                return res.json()

            }
            if(res.status > 299){
                currentErr = "something went wrong"
         
            }
            if(res.status === 403){
                currentErr ="You cannot bid on your own auction!"
                isSuccess=false
                showSnackBar = true
                isStatus="Error"
                amount = ""
            }
        })
        .then((data) => {
            if(data){
               console.log(data)
               currentErr ="Bid was placed good luck!"
                isSuccess=true
                showSnackBar = true
                isStatus="Success"
                amount = 0
            }
        })
        .catch((err) => {
            currentErr = err
            console.log("Something horrible went wrong :O",err)
        })
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