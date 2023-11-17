<div class="w-full max-w-xs m-auto ">
 
    <form on:submit|preventDefault={Register} class=" rounded px-8 pt-6 pb-8 mb-4 customBg shadow-md">

        <div class="mb-4">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                Name*
                <input
                type="text"
                id="name"
  
                bind:value={name}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"    
                 />
            </label>
        </div>

        <div class="mb-4">
            <label for="mail" class="block text-gray-700 text-sm font-bold mb-2">
                Email*
                <input
                type="text"
                id="mail"
  
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
        <button on:click={switchFormLogin}><strong>Login</strong></button>
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
    import Snackbar from "../uiComponents/Snackbar.svelte";
  
    let name = ""
    let email = ""
    let password = ""
    let avatar = ""

    let isSuccess = true
    let currentErr = null
    let showSnackBar = false
    let isStatus = "Success"

    export let switchFormLogin

    const mailRegex = /^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/;
    const urlPattern = /^(http|https):\/\/[^ "]+$/;


    const Register = () => {
        fetch("https://api.noroff.dev/api/v1/auction/auth/register",{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name:name.trim().replaceAll(" ",""),
                password: password,
                email:email.toLocaleLowerCase(),
                avatar: avatar
            })
        })
        .then((res) => {
            if(res.status < 299){
                console.log( res.json())
                return res.json()

            }
            if(res.status > 299){
                currentErr = "something went wrong"
            }
            if(res.status === 400){
             
            
                currentErr ="Profile already exists"
                isSuccess=false
                showSnackBar = true
                isStatus="Error"

                 name = ""
                 email = ""
                 password = ""
                 avatar = ""

            
            }
        })
        .then((data) => {
            if(data){
                currentErr ="Account created, you can now log in"
                isSuccess=true
                showSnackBar = true
                isStatus="Success"
                
                 name = ""
                 email = ""
                 password = ""
                 avatar = ""
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