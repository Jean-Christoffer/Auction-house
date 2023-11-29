<div class="w-full max-w-xs m-auto ">
 
    <form 
     method="post"
    
     use:enhance
    
     
     class=" rounded px-8 pt-6 pb-8 mb-4 customBg shadow-md">

        <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                Name*
                <input
                type="text"
                id="name"
                name="name"
                bind:value={name}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>

        <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                Email*
                <input
                type="email"
                id="email"
                name="email"
  
                bind:value={email}
                class="shadow appearance-none border rounded w-full py-2 px-3  mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
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
                Password*
                <input
                 class="shadow appearance-none border {password.length < 7 ? " border-red-500" : ""} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="password" 
                 id="password"
                 name="password"

                 bind:value={password} />
                 {#if password.length < 7}
                 <p class="text-red-500 text-xs italic">Atleast 7 characters long.</p>
                 {/if}
            </label>
        </div>
        <div class="mb-6">
            <label for="avatar"
            class="block text-gray-700 text-sm font-bold mb-2"
            >
                Avatar <span class="text-xs italic "><small class="text-grey-300">optional</small></span>
                <input
                 class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" 
                 id="avatar" 
                 name="avatar"
                 bind:value={avatar} />
                 {#if !urlPattern.test(avatar)}
                    <p class="text-grey-500 text-xs italic">Must be a valid url</p>
                {/if}
            </label>
        </div>
        <div  class="flex items-center justify-between">
            <div class="customWidth">
                <Button buttonText="Register" isDisabled={mailRegex.test(email) &&  password.length > 7 ? false : true } />
            </div>       
        </div>
     
    </form>
    <div class="customWidth flex flex-col align-center m-auto">
        <p>Already have an account? </p>
        <a href="/login" class="text-center"><strong>Login</strong></a>
    </div>

</div>
<script>
    import {enhance} from "$app/forms"
    import Button from "../uiComponents/Button.svelte";

 

    let name = ""
    let email = ""
    let password = ""
    let avatar = ""



    const mailRegex = /^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/;
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