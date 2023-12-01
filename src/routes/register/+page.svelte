<div class="h-screen m-auto">
    <h1 class="text-center text-5xl mb-4 mt-4">Fine auctions</h1>

        <p class="text-center  mb-4 mt-4">
            Login or create an account to bid and list items
        </p>

  

    <div in:fade={{ delay: 250, duration: 300 }}>
        <RegisterForm form={form}/>
    </div>
   
    {#if form?.incorrect}
    <div class="max-w-sm md:pl-2">
        <Snackbar status="Error" message="User already exist!" show={true} isSuccess={false} />
    </div>
    {/if}
    {#if form?.success}
    <div class="max-w-sm md:pl-2">
        <Snackbar status="Success" message="You can now log in" show={true} isSuccess={true} />
    </div>
    {/if}
</div>
<script>
    export let form
    import RegisterForm from "$lib/components/forms/RegisterForm.svelte";
	import { fade } from 'svelte/transition';
  import Snackbar from "$lib/components/uiComponents/Snackbar.svelte";
</script>
<style lang="postcss">

</style>