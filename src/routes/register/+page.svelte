<div class="h-screen m-auto">
    <h1 class="text-center text-5xl mb-4 mt-4">Fine auctions</h1>

        <p class="text-center  mb-4 mt-4">
            Login or create an account to bid and list items
        </p>

  

    <div in:fade={{ delay: 250, duration: 300 }}>
        <RegisterForm/>
    </div>
   

</div>
<script>
    export let form
    import RegisterForm from "$lib/components/forms/RegisterForm.svelte";
	import { fade } from 'svelte/transition';

</script>
<style lang="postcss">

</style>