
import type { Load } from '@sveltejs/kit';
export const prerender = true;
export const load: Load = async ({ fetch }) => {
    const fetchAuctionItem = async () => {
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true&_seller=true`;
        const response = await fetch(apiUrl);
        const data = await response.json();

      
        type AuctionItem = {
            media: string[];
            endsAt: string;
        };

        return data
            .filter((i: AuctionItem) => i.media.length > 0)
            .sort((a: AuctionItem, b: AuctionItem) => {
                const date1 = new Date(a.endsAt);
                const date2 = new Date(b.endsAt);
                return date1.getTime() - date2.getTime();
            })
            .slice(0, 9);
    };

    return {
       
            auctionItem: await fetchAuctionItem()
        
    };
};
