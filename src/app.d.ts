// app.d.ts
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
    
        interface Locals {
            user?: {
                name: string  ;
				token:string ;
            };
            isAuthenticated: boolean;
        }

  
        interface Error {
            status: number;
            message: string;
        }

 
  
    }
    interface ExtendedFormData extends FormData {
        status?: number;
        incorrect?:boolean;
        success?:boolean
    }
    interface AuctionItemTypes {
        bids?:Bids[]
        created:string;
        description:string
        endsAt:string
        id:string
        media:string[]
        seller:Seller
        tags:string[]
        title:string
        updated:string
        _count?:Count
    }
    interface Bids{
        amount:number;
        bidderName:string;
        created:string;
        id:string
    }
    interface Seller{
        avatar:string
        email:string
        name:string
        wins?:string[]
    }
    interface Count{
        bids:number
    }

    interface Listings{
        listings:number | null

    }
       interface ProfileData{
        avatar:string;
        credits:number;
        email: string;
        listings:AuctionItemTypes[];
        name:string;
        wins?:string[];
        _count?:Listings;

       }
}

export {};

