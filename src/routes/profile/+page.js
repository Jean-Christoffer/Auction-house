import {authStore } from "$lib/data/authstore"
import { get } from 'svelte/store';
export async function load({ fetch }) {
    const { userId, token } = get(authStore);
    if (!token) {
        return {
            profileData:null
        };
    }


        const fetchAuctionItem = async () => {
            const apiUrl = `https://api.noroff.dev/api/v1/auction/profiles/${userId}?_listings=true&_active=true&_bids=true`;
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
            profileData: fetchAuctionItem()
        }

    

}

