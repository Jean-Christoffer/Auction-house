import { redirect } from '@sveltejs/kit';

export async function load({ fetch,locals }) {
    if (!locals.user) {
        throw redirect(307, '/warning');
    }
        const fetchAuctionItem = async () => {
            const apiUrl = `https://api.noroff.dev/api/v1/auction/profiles/${locals.user.name}?_listings=true&_active=true&_bids=true`;
            const response = await fetch(apiUrl,{
                method:"GET",
                credentials: "same-origin",
                headers: {
                    Authorization: `Bearer ${locals.user.token}`
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

        const title = formData.get("title")
        const description = formData.get("description")
        const tags = formData.get("tags")
        const media = formData.get("media")
        const endsAt = formData.get("endsAt")

   
    
    
      
        const result = await createAuction(title,description,tags,media,endsAt, locals.user.token);
        console.log(result)
      
        return {
            status: 303, // 'See Other' status code for redirection
            headers: {
                location: `/profile` // Redirect to the same auction item page
            }
        };
    },
    async update({ request, locals }) {
        const formData = await request.formData();
        const media = formData.get("url")
        const result = await updateMedia(media, locals.user.name,locals.user.token);
        console.log(result)
      
        return {
            status: 303, // 'See Other' status code for redirection
            headers: {
                location: `/profile` // Redirect to the same auction item page
            }
        };
    },


};


async function createAuction( title,description,tags,media,endsAt, token) {
  
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
            // If the response is not 'ok', attempt to read and log the error message
            const errorData = await response.json();
            console.error('Error Response:', errorData);

            if (response.status === 400) {
                // Handle Bad Request
                console.error('Bad Request:', errorData.message);
                return null;
            } else if (response.status === 403) {
                console.error('Forbidden:', errorData.message);
                return null;
            } else {
                // Handle other HTTP errors
                console.error(`HTTP Error: ${response.status}`);
                return null;
            }
        }
    } catch (err) {
        console.error("Network or other error:", err);
        return null;
    }
}


async function updateMedia( media,user,token) {
  
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
            console.log(data);
  
        } else {
            // If the response is not 'ok', attempt to read and log the error message
            const errorData = await response.json();
            console.error('Error Response:', errorData);

            if (response.status === 400) {
                // Handle Bad Request
                console.error('Bad Request:', errorData.message);
                return null;
            } else if (response.status === 403) {
                console.error('Forbidden:', errorData.message);
                return null;
            } else {
                // Handle other HTTP errors
                console.error(`HTTP Error: ${response.status}`);
                return null;
            }
        }
    } catch (err) {
        console.error("Network or other error:", err);
        return null;
    }
}

