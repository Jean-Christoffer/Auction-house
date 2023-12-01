{#if auctionItem?.seller?.name !== $page.data.user.name }
<AuctionId  data = {auctionItem} form={form}/>
{:else}
    <AuctionIDyours data = {auctionItem} form={form}/>
{/if}
<script>
    export let data
    export let form
    import { page } from '$app/stores'
    import AuctionId from '$lib/components/auctionItems/AuctionID.svelte';
    import AuctionIDyours from  '$lib/components/auctionItems/AuctionIDyours.svelte';
    const {auctionItem} = data

</script>