<div class="w-full max-w-xs m-auto">
    
    <form on:submit|preventDefault={login} class=" rounded px-8 pt-6 pb-8 mb-4  customBg shadow-md">
        <div class="mb-4">
            <label for="mail" class="block text-gray-700 text-sm font-bold mb-2">
                Email
                <input
                type="text"
                id="mail"
  
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
        <button on:click={switchForm}><strong>register</strong></button>
    </div>
    <div class="mt-2">
        <Snackbar
            message={currentErr}
            show={showSnackBar}
            isSuccess={isSuccess} 
            status={isStatus} />
    </div>
</div>
<script>

    import Button from "../uiComponents/Button.svelte";
    import { goto } from '$app/navigation';
    import Snackbar from "../uiComponents/Snackbar.svelte";
    import {authStore } from "$lib/data/authstore"
    
    let email = ""
    let password = ""
 

    let isSuccess = true
    let currentErr = null
    let showSnackBar = false
    let isStatus = "Success"

    export let switchForm
    const mailRegex = /^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/;

    const login = () => {
        fetch("https://api.noroff.dev/api/v1/auction/auth/login",{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email:email.toLocaleLowerCase(),
                password: password
            })
        })
        .then((res) => {
            if(res.status < 299){
                return res.json()

            }
            if(res.status > 299){
                currentErr = "something went wrong"
            }
            if(res.status === 401){
                currentErr ="Invalid email or password"
                isSuccess=false
                showSnackBar = true
                isStatus="Error"
                 email = ""
                 password = ""
            }
        })
        .then((data) => {
            if(data){
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('userId', data.name);
                authStore.login(data.accessToken,  data.name);
                goto('/profile')
       
         
            }
        })
        .catch((err) => {
            currentErr = err
            console.log("Something horrible went wrong :O",err)
        })
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