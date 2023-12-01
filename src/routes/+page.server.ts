

   export function load({ fetch }) {
        const fetchAuctionItem = async () => {
            const apiUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true`;
            const response = await fetch(apiUrl);
            const data = await response.json();
      
            return data.filter((i: { media: string | any[]; }) => i.media.length > 0)
            .sort((a: { endsAt: string | number | Date; }, b: { endsAt: string | number | Date; }) => {
                const date1 = new Date(a.endsAt);
                const date2 = new Date(b.endsAt);
              return date1.getTime() - date2.getTime();
              }).slice(0,9)
        }
        return {
            auctionItem: fetchAuctionItem()
        }
    
    
    }
    
    