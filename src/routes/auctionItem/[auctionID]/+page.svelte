{#if auctionItem?.seller?.name !== $page.data.user }
<AuctionId  data = {auctionItem}/>
{:else}
    <AuctionIDyours data = {auctionItem}/>
{/if}
<script>
    export let data
    import { page } from '$app/stores'
    console.log(data)
   
    import AuctionId from '$lib/components/auctionItems/AuctionID.svelte';
    import AuctionIDyours from  '$lib/components/auctionItems/AuctionIDyours.svelte';
    const {auctionItem} = data

</script>