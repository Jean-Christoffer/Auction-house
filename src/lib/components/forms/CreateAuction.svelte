<div class="w-full max-w-xs m-auto ">
 
    <form
    use:enhance
    method="post"
    action="?/create" 
    class="  px-8 pt-6 pb-8 mb-4 customBg">
    
        <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">
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
            <label for="tags"
            class="block text-gray-700 text-sm font-bold mb-2"
            >
                Tags*
                <input
                 class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" 
                 id="tags" 
                 name="tags"
                 maxlength="8"
                 bind:value={tags} />
            </label>
        </div>
        <div class="mb-4">
            <label for="media-count" class="block text-gray-700 text-sm font-bold mb-2">
                Number of images
                <select  id="media-count" bind:value={numberOfMediaUrls} on:change={() => (mediaUrls = Array.from({ length: numberOfMediaUrls }, () => ""))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <!-- Add more options as needed -->
                </select>
            </label>
        </div>
        {#each mediaUrls as mediaUrl, index}
        <div class="mb-4">
            <label for={`media-url-${index}`} class="block text-gray-700 text-sm font-bold mb-2">
               Image {index + 1}
                <input
                    type="text"
                    id={`media-url-${index}`}
                    name={`media-url-${index}`}
                    bind:value={mediaUrl}
                    on:input={(event) => updateMediaUrls(index, event)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                    />
            </label>
        </div>
        {/each}




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
                <Button buttonText="List item"
                isDisabled={
                    title.length > 3 &&
                    description.length > 3 &&
                    tags.length >= 3 && 
                    mediaUrls.every(u => urlPattern.test(u)) ? false : true
                    }  />
            </div>       
        </div>
     
    </form>
    {#if form?.status === 303}
    <Snackbar status="Success" show={true}  isSuccess={true} message="Auction created"/>
    {/if}
</div>
<script lang="ts">
    
    import Button from "../uiComponents/Button.svelte";
    import {enhance} from "$app/forms"
    export let form:ExtendedFormData
    import Snackbar from "../uiComponents/Snackbar.svelte";
    let title = ""
    let description = ""
    let tags = ""
    let endsAt = new Date()
    let numberOfMediaUrls = 1; 
    let mediaUrls = [""];

    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    
    function updateMediaUrls(index: number, event: Event): void {
        const target = event.target;
        if (target instanceof HTMLInputElement) {
            mediaUrls[index] = target.value;
        }
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