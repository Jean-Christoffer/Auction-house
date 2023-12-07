{#if searchData && searchData.length > 0}
<div>
    {#each searchData as item}
    <a href="/auctionItem/{item.id}">
         <SearchItem  searchData={item}/>
    </a>
    {/each}

    
</div>
{/if}
<script lang="ts">

    import SearchItem from "./searchComponents/SearchItem.svelte";

    export let searchData:AuctionItemTypes[]
   
</script>
<style lang="postcss">

</style>