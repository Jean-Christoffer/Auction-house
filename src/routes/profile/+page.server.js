
export async function load({ fetch,locals }) {

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

