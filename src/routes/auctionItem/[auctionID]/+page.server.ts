
import { redirect } from '@sveltejs/kit';
import type { Actions,PageServerLoad } from  './$types';

interface EditDetails {
    title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    tags: FormDataEntryValue | null;
    media: FormDataEntryValue | null;
    token: string | undefined;
    auctionID:string  | null;

    
}
interface BidDetails {
    token: string | null;
    auctionID:string  | null
    bidAmount:FormDataEntryValue | null
}

  
export const load:PageServerLoad = async ({ fetch, params,locals }) => {
    if (!locals.user) {
        throw redirect(307, '/warning');
    }

    const fetchAuctionItem = async (id: string) => {
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings/${id}?_seller=true&_bids=true`;
        const response = await fetch(apiUrl,{
            method:"GET",
            credentials: "same-origin",
            headers: {
                Authorization: `Bearer ${locals?.user?.token}`
        }});
        const data = await response.json();

        return data
    }
    return {
        auctionItem: fetchAuctionItem(params.auctionID)
    }


}

export const actions:Actions = {
    async bid({ request, locals, params }) {
        const formData = await request.formData();

        const bidAmount = formData.get('amount');
  
        const token = locals?.user?.token as string;
        const auctionID = params.auctionID;

        const result = await placeBid({auctionID, bidAmount,token} );
       
      
        return {
            status: 303, 
            headers: {
                location: `/auctionItem/${params.auctionID}` 
            }
        };
    },

    async edit({ request, locals, params }) {
        const formData = await request.formData();
        const media = formData.get('url');
        const title = formData.get('title');
        const description = formData.get('description');
        const tags = formData.get('tags');
        const token = locals?.user?.token

        const auctionID = params.auctionID;
        const resultsEdit = await editAuction({ auctionID,media,title,description,tags,token} )
    

        return {
            status: 303, 
            headers: {
                location: `/auctionItem/${params.auctionID}` 
            }
        };
    },

    async deleteAuction({ request, locals, params }) {
        const formData = await request.formData();
        const auctionID = params.auctionID;
        const token = locals?.user?.token as string;
        
        const resultsDelete = await deleteItem(auctionID,token)
        console.log(resultsDelete,formData)
        throw redirect(303, '/profile');
  
    }
};

async function placeBid({auctionID, bidAmount, token}:BidDetails ) {

    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${auctionID}/bids`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ amount: Number(bidAmount) })
        });

        if (response.ok) {
            const data = await response.json();
            return data
   
        } else {

            const errorData = await response.json();
            console.error('Error Response:', errorData);

            if (response.status === 400) {
  
                console.error('Bad Request:', errorData.message);
                return null;
            } else if (response.status === 403) {
                console.error('Forbidden:', errorData.message);
                return null;
            } else {

                console.error(`HTTP Error: ${response.status}`);
                return null;
            }
        }
    } catch (err) {
        console.error("Network or other error:", err);
        return null;
    }
}




async function editAuction({auctionID,media,title,description,tags,token}:EditDetails) {

    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${auctionID}`,{
            method:"PUT",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({
                title:title,
                description:description,
                tags:Array(tags),
                media:Array(media)
            })
        })
        const data = await response.json();
        console.log(data)
        if (response.ok) {
            return { success: true };
            
         
       
        } else {
    
            const errorData = await response.json();
            console.error('Error Response:', errorData);

            if (response.status === 400) {
  
                console.error('Bad Request:', errorData.message,errorData);
                return null;
            } else if (response.status === 403) {
                console.error('Forbidden:', errorData.message);
                return null;
            } else {
      
                console.error(`HTTP Error: ${response.status}`);
                return null;
            }
        }
      
    } catch (err) {
        console.error("Network or other error:", err);
        return null;
    }
}

async function deleteItem(auctionID:string,token:string) {

    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/auction/listings/${auctionID}`,{
            method:"DELETE",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        
        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
      
            const errorData = await response.json();
            console.error('Error Response:', errorData);

            if (response.status === 400) {

                console.error('Bad Request:', errorData.message,errorData);
                return null;
            } else if (response.status === 403) {
                console.error('Forbidden:', errorData.message);
                return null;
            } else {
 
                console.error(`HTTP Error: ${response.status}`);
                return null;
            }
        }
    } catch (err) {
        console.error("Network or other error:", err);
        return null;
    }
}



