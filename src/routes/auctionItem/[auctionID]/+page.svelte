{#if auctionItem?.seller?.name !== $page.data.user.name }
<AuctionId  data = {auctionItem}/>
{:else}
    <AuctionIDyours data = {auctionItem}/>
{/if}
<script>
    export let data
    import { page } from '$app/stores'
    import AuctionId from '$lib/components/auctionItems/AuctionID.svelte';
    import AuctionIDyours from  '$lib/components/auctionItems/AuctionIDyours.svelte';
    const {auctionItem} = data

</script>