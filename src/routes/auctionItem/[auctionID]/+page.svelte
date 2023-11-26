{#if auctionItem?.seller?.name !== $authStore.userId }
<AuctionId  data = {auctionItem}/>
{:else}
    <AuctionIDyours data = {auctionItem}/>
{/if}
<script>
    export let data
    console.log(data)
    import { authStore } from '$lib/data/authstore.js';
    import AuctionId from '$lib/components/auctionItems/AuctionID.svelte';
    import AuctionIDyours from  '$lib/components/auctionItems/AuctionIDyours.svelte';
    const {auctionItem} = data

</script>