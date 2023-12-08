import { redirect } from '@sveltejs/kit';
import type { Actions,PageServerLoad } from  './$types';

interface AuctionDetails {
    title: FormDataEntryValue | null;
    description: FormDataEntryValue | null;
    tags: FormDataEntryValue | null;
    mediaUrls:string[];
    endsAt: FormDataEntryValue | null;
    token: string | null;
}
interface UserDetails {
    token: string | null;
    user:string | null
    media:FormDataEntryValue | null
}
export const load: PageServerLoad = async  ({ fetch,locals })  => {
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
export const actions:Actions = {
    async create({ request, locals }) {
        const formData = await request.formData();


        const title = formData.get("title");
        const description = formData.get("description");
        const tags = formData.get("tags");
       // const media = formData.get("media");

    
        const endsAt = formData.get("endsAt");
        const token = locals?.user?.token as string;

        const mediaUrls = [];
        for (const [key, value] of formData.entries()) {
            if (key.startsWith('media-url')) {
                mediaUrls.push(String(value));
            }
        }
        const filteredMediaUrls = mediaUrls.filter(url => url.trim() !== '');

        const result = await createAuction({ title, description, tags, mediaUrls: filteredMediaUrls, endsAt, token })

      
        return {
            status: 303,
            headers: {
                location: `/profile`
            }
        };
    },
    async update({ request, locals }) {
        const formData = await request.formData();
        const media = formData.get("url")
        
        const token = locals?.user?.token as string;
        const user = locals?.user?.name as string


        const result = await updateMedia({media, user, token});
        console.log(result)
      
        return {
            status: 303, 
            headers: {
                location: `/profile`
            }
        };
    },


};

async function createAuction({ title, description, tags, mediaUrls, endsAt, token }: AuctionDetails) {
  
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
                media: mediaUrls,
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


async function updateMedia( {media,user,token}:UserDetails) {
  
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

