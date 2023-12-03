{#if auctionData?.seller?.name !== $page.data.user.name}
<AuctionId  data = {auctionData} form={form}/>
{:else}
    <AuctionIDyours data = {auctionData} form={form}/>
{/if}
<script>
    export let data
    export let form
    import { page } from '$app/stores'
    import AuctionId from '$lib/components/auctionItems/AuctionID.svelte';
    import AuctionIDyours from  '$lib/components/auctionItems/AuctionIDyours.svelte';
    let auctionData = {}
    

        $: {
        if(data){
            const {auctionItem} = data
            auctionData = auctionItem

        }
        }
</script>