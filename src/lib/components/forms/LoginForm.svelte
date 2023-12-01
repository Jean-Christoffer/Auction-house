<div class="w-full max-w-xs m-auto">
    
    <form method="POST" class=" rounded px-8 pt-6 pb-8 mb-4  customBg shadow-md"  use:enhance  >
        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                Email
                <input
                type="email"
                id="email"
                name="email"
  
                bind:value={email}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
                 {#if !mailRegex.test(email)}
                    <p class="text-red-500 text-xs italic">Email must be a Noroff mail</p>
                {/if}
            </label>
        </div>
        <div class="mb-6">
            <label for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >
                Password
                <input
                 class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="password" 
                 id="password"
                 name="password" 

                 bind:value={password} />
                 {#if password.length < 7}
                 <p class="text-red-500 text-xs italic">Atleast 7 characters long.</p>
                 {/if}
            </label>
        </div>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="Sign in" isDisabled={mailRegex.test(email) &&  password.length > 7 ? false : true }  />
            </div>        
        </div>
     
    </form>
    <div class="customWidth flex flex-col align-center m-auto">
        <p>Don't have an account yet? </p>
        <a href="/register" class="text-center"><strong>register</strong></a>
    </div>
</div>

{#if form?.incorrect}
<div class="max-w-sm md:pl-2">
    <Snackbar status="Error" message="wrong email or password" show={true} isSuccess={false} />
</div>
{/if}
<script>

    import Button from "../uiComponents/Button.svelte";
    import {enhance} from "$app/forms"
    import Snackbar from "../uiComponents/Snackbar.svelte";
    export let form
 
    console.log(form)
    let email = ""
    let password = ""
    const mailRegex = /^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/;
  

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