


export function load({ fetch }) {
    const fetchAuctionItem = async () => {
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true`;
        const response = await fetch(apiUrl);
        const data = await response.json();
  
        return data.filter(i => i.media.length > 0)
    }
    return {
        auctionItem: fetchAuctionItem()
    }


}

