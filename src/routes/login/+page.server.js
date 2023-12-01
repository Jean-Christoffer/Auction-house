
import { redirect,fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get('email');
        const password = form.get('password');
       
      	if (!email) {
			return fail(400, { email, missing: true });
		}
        const response = await fetch('https://api.noroff.dev/api/v1/auction/auth/login',{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
              
            },
            body:JSON.stringify({
                email:email,
                password: password
            })
        })

        if (!response.ok) {
            const errorData = await response.json(); 
            console.log('Login Error its me:', errorData); 
       
            if(response.status === 401){
                return fail(401, { 
                    error: errorData.message || 'Login failed',
                    email, incorrect: true
                });
            }
          
        }
    

        const data = await response.json(); 
   

            const accessToken = data.accessToken; 
            const name = data.name;
            cookies.set('bearer_token', accessToken, {
                path: '/',
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 1
            });
    
            cookies.set('user_name', name, {
                path: '/',
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 1
            });
            if (response.ok) {
                throw redirect(303, "/profile");
            }

    }
};

