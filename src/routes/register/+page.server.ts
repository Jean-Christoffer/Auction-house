
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions:Actions = {
    default: async ({ request }) => {
        const form = await request.formData();

        const name = form.get("name") ;
        const email = form.get('email')  ;
        const password = form.get('password');
        const avatar = form.get("avatar")
        
      
        const response = await fetch('https://api.noroff.dev/api/v1/auction/auth/register',{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name:name,
                password: password,
                email:email,
                avatar: avatar
            })
        })
        if (!response.ok) {
            const errorData = await response.json(); 
            console.log('Login Error:', errorData); 
        
            if(response.status === 400){
                return fail(400, { 
                    error: errorData.message || 'Login failed',
                    email, incorrect: true
                });
            }
          
            return { error: errorData.message || 'Login failed' };
        }
 
        const data = await response.json(); 
        console.log(data)
        if (response.ok) {
            return { success: true };
        }
    

      
    }
};

