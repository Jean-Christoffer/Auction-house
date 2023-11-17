<div class="h-screen m-auto">
    <h1 class="text-center text-5xl mb-4 mt-4">Fine auctions</h1>
     {#if !isLoggedIn}
        <p class="text-center  mb-4 mt-4">
            Login or create an account to bid and list items
        </p>
     {/if}
    {#if isLoginForm}
    <div  in:fade={{ delay: 250, duration: 300 }}>
        <LoginForm  switchForm={switchFormRegister}/>
    </div>
    {/if}
    {#if isRegisterForm}
    <div in:fade={{ delay: 250, duration: 300 }}>
        <RegisterForm switchFormLogin={switchFormLogin} />
    </div>
    {/if}

</div>
<script>
    import LoginForm from "$lib/components/forms/LoginForm.svelte";
    import RegisterForm from "$lib/components/forms/RegisterForm.svelte";
    import user from "$lib/data/user"
	import { fade } from 'svelte/transition';
    $: isLoggedIn = $user === null ? false : true
    function logOut(){
        user.update(val => val = null)
    }

    let isLoginForm = true
    let isRegisterForm = false

    function switchFormRegister(){
        isLoginForm = !isLoginForm
        isRegisterForm = !isRegisterForm
    }
    function switchFormLogin(){
        isRegisterForm = !isRegisterForm
        isLoginForm = !isLoginForm
    }
</script>
<style lang="postcss">

</style>