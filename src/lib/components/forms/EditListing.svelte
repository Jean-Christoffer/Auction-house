<div class="w-full max-w-xs  ">
 
    <form  
    class="px-8 pt-6 pb-8 mb-4 customBg"
    method="post"
    action="?/edit"
    use:enhance
    >
        <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
                Title
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
                Description
                <input
                type="text"
                id="description"
                name="description"
  
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
                name="tags"
  
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
                name="url"
  
                bind:value={mediaurl}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>

        </div>
        
        <input type="file" name="images" multiple>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="Update listing" isDisabled={title.length > 0 || description.length > 0 || tags.length > 0 || urlPattern.test(mediaurl)
       
               ? false : true } />
            </div>       
        </div>
        {#if form?.status === 303}
        <div class="max-w-sm p-2 ">
            <Snackbar status="Success" message="Listing changed" show={true} isSuccess={true} />
        </div>
        {/if}

    </form>
    
</div>
<script lang="ts">
     import {enhance} from "$app/forms"
     import Button from "../uiComponents/Button.svelte";
     import Snackbar from "../uiComponents/Snackbar.svelte";
     export let form:ExtendedFormData

    let mediaurl = ""
    let title = ""
    let description = ""
    let tags = ""
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