<div class="w-full max-w-xs  ">
 
    <form 
    use:enhance
     method="post"
     action="?/update"
     class="  px-8 pt-6 pb-8 mb-4 customBg">

        <div class="mb-4">
            <label for="url" class="block text-gray-700 text-sm font-bold mb-2">
                Media url*
                <input
                type="text"
                id="url"
                name="url"
  
                bind:value={mediaurl}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="Update avatar" isDisabled={urlPattern.test(mediaurl)
       
               ? false : true } />
            </div>       
        </div>
     
    </form>


</div>
<script>
    
    import Button from "../uiComponents/Button.svelte";

    import {enhance} from "$app/forms"
    let mediaurl = ""

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