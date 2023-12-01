<div class="w-full max-w-xs m-auto ">
 
    <form
    use:enhance
    method="post"
    action="?/create" 
    class="  px-8 pt-6 pb-8 mb-4 customBg">
    
        <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                Title*
                <input
                type="text"
                id="title"
                name="title"
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
                name="description"
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
                 name="tags"
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
                 name="media"
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
                 name="endsAt"
                 required

                 bind:value={endsAt} />
            </label>
        </div>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="List item" isDisabled={urlPattern.test(media)
                 && title.length > 1
                 && description.length > 1
                 && tags.length > 1
               ? false : true } />
            </div>       
        </div>
     
    </form>
    {#if form?.status === 303}
    <Snackbar status="Success" show={true}  isSuccess={true} message="Auction created"/>
    {/if}
</div>
<script>
    
    import Button from "../uiComponents/Button.svelte";
    import {enhance} from "$app/forms"
    export let form
    import Snackbar from "../uiComponents/Snackbar.svelte";
    let title = ""
    let description = ""
    let tags = ""
    let media = ""
    let endsAt = new Date()



 


    const urlPattern = /^(http|https):\/\/[^ "]+$/;

   
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