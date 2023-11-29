<div class="w-full max-w-xs m-auto ">
 
    <form on:submit|preventDefault={Create} class="  px-8 pt-6 pb-8 mb-4 customBg">

        <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                Title*
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
                Description*
                <input
                type="text"
                id="description"
  
                bind:value={description}
                class="shadow appearance-none border rounded w-full py-2 px-3  mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>
        <div class="mb-6">
            <label for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >
                Tags*
                <input
                 class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" 
                 id="tags" 

                 bind:value={tags} />
            </label>
        </div>
        <div class="mb-6">
            <label for="media"
            class="block text-gray-700 text-sm font-bold mb-2"
            >
                Media*
                <input
                 class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" 
                 id="media" 

                 bind:value={media} />
                 {#if !urlPattern.test(media)}
                    <p class="text-grey-500 text-xs italic">Must be a valid url</p>
                {/if}
            </label>
        </div>
        <div class="mb-6">
            <label for="endsAt"
            class="block text-gray-700 text-sm font-bold mb-2"
            >
                EndsAt 
                <input
                 class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="date" 
                 id="endsAt" 
                 required

                 bind:value={endsAt} />
            </label>
        </div>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="List item" isDisabled={urlPattern.test(media)
                 && title.length > 3
                 && description.length > 5
                 && tags.length > 5
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

    let title = ""
    let description = ""
    let tags = ""
    let media = ""
    let endsAt = new Date()




    let isSuccess = true
    let currentErr = null
    let showSnackBar = false
    let isStatus = "Success"



    const urlPattern = /^(http|https):\/\/[^ "]+$/;

    const Create = () => {
        fetch("https://api.noroff.dev/api/v1/auction/listings",{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${$page.data.token}`
            },
            body:JSON.stringify({
                title:title,
                description: description,
                tags:[tags],
                media: [media],
                endsAt:endsAt
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
                currentErr ="Could not list item"
                isSuccess=false
                showSnackBar = true
                isStatus="Error"

                title = ""
                description = ""
                tags = ""
                media=""
                endsAt = new Date()

            
            }
        })
        .then((data) => {
            if(data){
                currentErr ="Auction created!"
                isSuccess=true
                showSnackBar = true
                isStatus="Success"
                
                title = ""
                description = ""
                tags = ""
                media=""
                endsAt = new Date()
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