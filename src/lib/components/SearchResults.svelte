{#if searchData && searchData.length > 0}
<div>
    {#each searchData as item}
         <SearchItem  searchData={item}/>
    {/each}

    
</div>
{/if}
<script>

    import SearchItem from "./searchComponents/SearchItem.svelte";
    /**
	 * @type {Array<{}>}
	 */
    export let searchData
    $: console.log(searchData)
</script>
<style lang="postcss">

</style>