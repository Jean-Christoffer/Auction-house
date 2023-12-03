import { redirect } from '@sveltejs/kit';

export async function load({ fetch,locals }) {
    if (!locals.user) {
        throw redirect(307, '/warning');
    }
        const fetchAuctionItem = async () => {
            const apiUrl = `https://api.noroff.dev/api/v1/auction/profiles/${locals?.user?.name}?_listings=true&_active=true&_bids=true`;
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
            profileData: fetchAuctionItem()
        }
}
export const actions = {
    async create({ request, locals }) {
        const formData = await request.formData();


        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const tagsValue = formData.get("tags");
        const mediaValue = formData.get("media");

    
        const endsAt = formData.get("endsAt") as string;
        const token = locals?.user?.token as string;

        const result = await createAuction(title, description, tagsValue, mediaValue, endsAt, token
            );

      
        return {
            status: 303,
            headers: {
                location: `/profile`
            }
        };
    },
    async update({ request, locals }) {
        const formData = await request.formData();
        const mediaValue = formData.get("url")
        
        const token = locals?.user?.token as string;
        const userName = locals?.user?.name as string


        const result = await updateMedia(mediaValue, userName, token);
        console.log(result)
      
        return {
            status: 303, 
            headers: {
                location: `/profile`
            }
        };
    },


};


async function createAuction( title: string,description: string,tags: Array<string>,media: Array<string>,endsAt: string, token: string) {
  
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/auction/listings",{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({
                title:title,
                description: description,
                tags:Array(tags),
                media: Array(media),
                endsAt:endsAt
            })
        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
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


async function updateMedia( media: string,user:string,token:string) {
  
    try {
        const response = await fetch(`https://api.noroff.dev/api/v1/auction/profiles/${user}/media`,{
            method:"PUT",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body:JSON.stringify({
                avatar:media
            })
        })

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

