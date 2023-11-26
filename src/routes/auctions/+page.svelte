<div>
    <div  class="w-full overflow-hidden relative customHeight" >
        <div class="absolute top-0 left-0 w-full h-full bg-cover animate"></div>
        <div class="bg-overlay"></div>
        <div class="z-10 text-black relative  container mx-auto flex flex-col justify-center h-full pl-2 ">
            <p class="shadow"> {formatDate(date)}</p>
            <h1 class="text-4xl shadow"> Our collection of fine items</h1>
        </div>

    </div>
        <AuctionNav listings = {sortedListings}   selectedValue= {sortVal} setSelectedValue={handleChange} />
    <div  class="md:container md:mx-auto">
    <div class="flex flex-wrap items-stretch gap-1 h-full justify-center md:justify-start">
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
<script>
    export let data
    import AuctionItem from '$lib/components/auctionItems/AuctionItem.svelte';
    import AuctionNav from '$lib/components/auctionItems/AuctionNav.svelte';
    let listings 

    let date = ""
    let sortVal = ""

    $: {
    if(data){
        const {auctionItem} = data

        listings = auctionItem
        
    }
    }

        let sortedListings = [];
        $: if (listings && listings.length > 0) {
          
            sortedListings = [...listings].sort((a, b) => {
                switch (sortVal) {
                case 'new':
                    return new Date(b.created) - new Date(a.created);
                case 'old':
                    return new Date(a.created) - new Date(b.created);
                case "soon":
                    return new Date(a.endsAt) - new Date(b.endsAt)
                case "later":
                    return new Date(b.endsAt) - new Date(a.endsAt)
                case "lowHigh":
                    return getLatestBidAmount(a) - getLatestBidAmount(b)
                case "highLow":
                    return getLatestBidAmount(b) - getLatestBidAmount(a);
                default:
                    return 0;
                }
            });
        
  }
 
//handles the weird pricing
function getLatestBidAmount(listing) {
    const bids = listing.bids;
   
    if (bids && bids.length > 0) {
      return parseFloat(bids[bids.length - 1].amount);
    }
    return 0;
  }


//sortValue
  function handleChange(event) {
    sortVal = event.target.value
    
   
  }
  //some fun dates
    function formatDate(dateString) {
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
        background-image: url("./6.jpg");

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
.customBg{
        background-color: #202020;
    }
.custom-width {
    width: calc(100% - 180px);
    margin: 0 auto;
}
.customHeight{
    height: 60vh;
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