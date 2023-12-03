{#if searchData && searchData.length > 0}
<div>
    {#each searchData as item}
    <a href="/auctionItem/{item.id}">
         <SearchItem  searchData={item}/>
    </a>
    {/each}

    
</div>
{/if}
<script>

    import SearchItem from "./searchComponents/SearchItem.svelte";
    /**
	 * @type {{}[] | null}
	 */
    export let searchData
    $: console.log(searchData)
</script>
<style lang="postcss">

</style>