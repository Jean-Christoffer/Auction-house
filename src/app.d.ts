// app.d.ts
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
    
        interface Locals {
            user?: {
                name: string  | undefined;
				token:string  | undefined;
            };
            isAuthenticated: boolean;
        }

  
        interface Error {
            status: number;
            message: string;
        }

   
        interface PageData {
            title: string;
            content: string;
        }

 
 


        interface Session {
            userId: string;
            roles: string[];
        }
    }
}

export {};
