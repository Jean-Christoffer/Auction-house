<div class="w-full max-w-xs my-2">

  
    <form
     class=" rounded px-8 pt-6 pb-8 mb-4  customBg shadow-md"
     action="?/bid"
     use:enhance method="post" >
        <div class="mb-4">
            <label for="amount" class="block text-gray-700 text-sm font-bold mb-2">
                Amount
                <input
                type="number"
                id="amount"
                name="amount"
  
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
    {#if form?.status === 303}
        <div class="max-w-sm md:pl-2">
            <Snackbar status="Success" message="Bid placed" show={true} isSuccess={true} />
        </div>
    {/if}
</div>
<script>
    import Button from "../uiComponents/Button.svelte";
    import {enhance} from "$app/forms"
    export let amountToBid = 0
    export let form
    import Snackbar from "../uiComponents/Snackbar.svelte";
    let amount = 0


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