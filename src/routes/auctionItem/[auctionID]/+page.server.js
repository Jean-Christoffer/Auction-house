

export function load({ fetch, params,locals }) {


    const fetchAuctionItem = async (id) => {
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings/${id}?_seller=true&_bids=true`;
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
        auctionItem: fetchAuctionItem(params.auctionID)
    }


}

