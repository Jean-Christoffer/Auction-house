<div class="w-full max-w-xs  ">
 
    <form on:submit|preventDefault={Update} class="  px-8 pt-6 pb-8 mb-4 customBg">
        <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
                Title
                <input
                type="text"
                id="title"
  
                bind:value={title}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>
        <div class="mb-4">
            <label for="description" class="block text-gray-700 text-sm font-bold mb-2">
                Description
                <input
                type="text"
                id="description"
  
                bind:value={description}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>
        <div class="mb-4">
            <label for="tags" class="block text-gray-700 text-sm font-bold mb-2">
                Tags
                <input
                type="text"
                id="tags"
  
                bind:value={tags}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>
        <div class="mb-4">
            <label for="url" class="block text-gray-700 text-sm font-bold mb-2">
                Media url
                <input
                type="text"
                id="url"
  
                bind:value={mediaurl}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>

        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="Update listing" isDisabled={title.length > 0 || description.length > 0 || tags.length > 0 || urlPattern.test(mediaurl)
       
               ? false : true } />
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
    export let auctionId = ""
    let mediaurl = ""
    let title = ""
    let description = ""
    let tags = ""

    const urlPattern = /^(http|https):\/\/[^ "]+$/;



    let isSuccess = true
    let currentErr = null
    let showSnackBar = false
    let isStatus = "Success"






    const Update = () => {
        fetch(`https://api.noroff.dev/api/v1/auction/listings/${auctionId}`,{
            method:"PUT",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${$page.data.token}`
            },
            body:JSON.stringify({
                title:title,
                description:description,
                tags:[tags],
                media:mediaurl
            })
        })
        .then((res) => {
            if(res.status < 299){
      
                return res.json()
               

            }
            if(res.status > 299){
         
                currentErr = "something went wrong"
            }
            if(res.status === 400){
                currentErr ="Invalid url"
                isSuccess=false
                showSnackBar = true
                isStatus="Error"

                mediaurl = ""

            
            }
        })
        .then((data) => {
            if(data){
                currentErr ="Listing updated!"
                isSuccess=true
                showSnackBar = true
                isStatus="Success"      
                mediaurl = ""
                
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