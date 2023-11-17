


export async function load({ fetch }) {
 
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings?_active=true&_bids=true`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return {
            props: {
                data
            }
        };
    }

