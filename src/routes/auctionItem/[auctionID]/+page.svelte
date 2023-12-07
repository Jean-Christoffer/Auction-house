{#if auctionData?.seller?.name !== $page?.data?.user?.name}
<AuctionId  data = {auctionData} form={form}/>
{:else}
    <AuctionIDyours data = {auctionData} form={form}/>
{/if}
<script lang="ts">
    export let data
    export let form : ExtendedFormData
    import { page } from '$app/stores'
    import AuctionId from '$lib/components/auctionItems/AuctionID.svelte';
    import AuctionIDyours from  '$lib/components/auctionItems/AuctionIDyours.svelte';


    let auctionData:AuctionItemTypes


        $: {
            if(data){
                const {auctionItem} = data
                auctionData = auctionItem

            }
        }
</script>