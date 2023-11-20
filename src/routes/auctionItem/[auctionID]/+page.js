import {authStore } from "$lib/data/authstore"
import { get } from 'svelte/store';
export function load({ fetch, params }) {

    const { userId, token } = get(authStore);
    if (!token) {
        return {
            props: {
                data: null 
            }
        };
    }

    const fetchAuctionItem = async (id) => {
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings/${id}?_seller=true&_bids=true`;
        const response = await fetch(apiUrl,{
            method:"GET",
            credentials: "same-origin",
            headers: {
                Authorization: `Bearer ${token}`
        }});
        const data = await response.json();
     
        return data
    }
    return {
        auctionItem: fetchAuctionItem(params.auctionID)
    }


}

