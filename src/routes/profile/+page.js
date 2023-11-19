import {authStore } from "$lib/data/authstore"
import { get } from 'svelte/store';
export async function load({ fetch }) {
    const { userId, token } = get(authStore);
    if (!token) {
        return {
            props: {
                data: null 
            }
        };
    }

    const apiUrl = `https://api.noroff.dev/api/v1/auction/profiles/${userId}?_listings=true`;
    const response = await fetch(apiUrl,{
        method:"GET",
        credentials: "same-origin",
        headers: {
            Authorization: `Bearer ${token}`
    }});
    const data = await response.json();
 
    return {
        props: {
            data
        }
    };
}

