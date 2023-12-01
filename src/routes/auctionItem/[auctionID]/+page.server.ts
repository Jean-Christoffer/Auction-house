
import { redirect } from '@sveltejs/kit';
export function load({ fetch, params,locals }) {
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

export const actions = {
    async bid({ request, locals, params }) {
        const formData = await request.formData();

        const bidAmount = formData.get('amount');
  
    
        const auctionID = params.auctionID;
        const result = await placeBid(auctionID, bidAmount, locals?.user?.token);
        console.log(result)
      
        return {
            status: 303, 
            headers: {
                location: `/auctionItem/${params.auctionID}` 
            }
        };
    },

    async edit({ request, locals, params }) {
        const formData = await request.formData();
        const mediaurl = formData.get('url');
        const title = formData.get('title');
        const description = formData.get('description');
        const tags = formData.get('tags');
    
        const auctionID = params.auctionID;
        const resultsEdit = await editAuction(
            auctionID,
            mediaurl,
            title,
            description,
            tags,
             locals?.user?.token )
    
        console.log(resultsEdit)
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

async function placeBid(auctionID : string, bidAmount : number, token : string) {

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




async function editAuction(auctionID: string,mediaurl: string[],title: string,description: string,tags: string[],token:string) {

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
                media:Array(mediaurl)
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



