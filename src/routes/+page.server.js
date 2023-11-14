
/*

export async function load({ url, fetch }) {
    const searchParam = url.searchParams.get('?_tag'); // Get the search parameter from the URL
    let searchData = [];

    if (searchParam) {
        // Construct the URL with the search parameter
        const apiUrl = `https://api.noroff.dev/api/v1/auction/listings?_tag=${encodeURIComponent(searchParam)}`;
        const response = await fetch(apiUrl);
        searchData = await response.json();
    }

    return {
        props: {
            searchData
        }
    };
}*/