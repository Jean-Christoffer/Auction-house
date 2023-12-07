<figure class="border-b border-gray-300 mt-10" id="{searchData.id}">
    <p class="text-xs leading-5 mb-5">Listed {formatDate(searchData.created)}</p>
    <article class="text-gray-800 flex items-center mb-10">
        <div class="w-20 h-20 mr-6">
            <img class="max-w-[80px] max-h-[80px] mx-auto block relative top-1/2 -translate-y-1/2" alt="" src="{searchData.media.length ? searchData.media[0] : "$lib/images/6.jpg"}"/>
        </div>
        <div class="max-w-[210px]">
            <h4 class="text-sm leading-5  font-semibold text-black">{searchData.title ?? ""}</h4>
            <p>{searchData.description ?? ""}</p>
            <p class="text-xs leading-5">Ends at: {formatDate(searchData.endsAt)}</p>
            <p class="text-xs leading-5">Current bids {searchData._count?.bids}</p>
        </div>

    </article>

</figure>
<script lang="ts">
export let searchData:AuctionItemTypes
function formatDate(dateString:string) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
}
</script>
