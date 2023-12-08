<svelte:head>
  <title>Auctions</title>
  <meta name="description" content="View our selected fine items">
</svelte:head>
<div>
    <div  class="w-full overflow-hidden relative customHeight" >
        <div class="absolute top-0 left-0 w-full h-full bg-cover animate"></div>
        <div class="bg-overlay"></div>
        <div class="z-10 text-black relative  container mx-auto flex flex-col justify-center h-full pl-2 ">
            <p class="shadow"> {formatDate()}</p>
            <h1 class="text-4xl shadow"> Our collection of fine items</h1>
        </div>

    </div>
        <AuctionNav listings = {sortedListings}   selectedValue= {sortVal} setSelectedValue={handleChange} />
    <div  class="md:container md:mx-auto">
    <div class="flex flex-wrap gap-9 items-stretch h-full justify-center mt-5 mb-5">
       
        {#if sortedListings}
            {#each sortedListings as listing}
                <a href="/auctionItem/{listing.id}" >
                    <AuctionItem listingData={listing} />
                </a>
            {/each}
        {/if}

    </div>
</div>
</div>
<script lang="ts">
    export let data
    import AuctionItem from '$lib/components/auctionItems/AuctionItem.svelte';
    import AuctionNav from '$lib/components/auctionItems/AuctionNav.svelte';
    let listings : AuctionItemTypes[]
 
    let sortVal = ""

    $: {
    if(data){
        const {auctionItem} = data
        listings = auctionItem
        
    }
    }

        let sortedListings:AuctionItemTypes[]
        $: if (listings && listings.length > 0) {

            sortedListings = [...listings].sort((a, b) => {
                const date1 = new Date(a.endsAt);
                const date2 = new Date(b.endsAt);

                const date1Creat = new Date(a.endsAt);
                const date2Create = new Date(b.endsAt);
                switch (sortVal) {
                case 'new':
                return date1Creat.getTime() - date2Create.getTime();
                case 'old':
                    return date2Create.getTime() - date1Creat.getTime();
                case "soon":
                    return date1.getTime() - date2.getTime() 
                case "later":
                     return date2.getTime() - date1.getTime();
                case "lowHigh":
                    return getLatestBidAmount(a) - getLatestBidAmount(b)
                case "highLow":
                    return getLatestBidAmount(b) - getLatestBidAmount(a);
                default:
                    return 0;
                }
            });
        
  }
 

function getLatestBidAmount(listing: { bids: any; }) {
    const bids = listing.bids;
   
    if (bids && bids.length > 0) {
      return parseFloat(bids[bids.length - 1].amount);
    }
    return 0;
  }

  function handleChange(event: { target: { value: string; }; }) {
    sortVal = event.target.value
    
   
  }

    function formatDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date();

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
}

</script>
<style lang="postcss">
    .animate{
        -webkit-animation: scalingBack 45s ease-in infinite;
        animation: scalingBack 45s ease-in infinite;
        -webkit-animation-play-state: running;
        animation-play-state: running;
        background-image: url("$lib/images/6.jpg");

    }


@keyframes scalingBack{
    0% {
    transform: scale(1.1);
}
    50% {
    transform: scale(1);
}
    100% {
    transform: scale(1.1);
}
}

.customHeight{
    height: 40vh;
}
.bg-overlay{
  position: absolute;
  inset: 0;
  background-color: #f2f2f25b;
  z-index: 1;
}
.shadow{
    text-shadow: 0px 4px 30px #ffffff;
}

</style>