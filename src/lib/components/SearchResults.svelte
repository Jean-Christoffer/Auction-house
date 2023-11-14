
{#if searchData && searchData.length > 0}
<div>
    {#each searchData as item}
         <SearchItem  searchData={item}/>
    {/each}

    
</div>

<script>

    import SearchItem from "./uiComponents/SearchItem.svelte";
    /**
	 * @type {Array<{}>}
	 */
    export let searchData
    $: console.log(searchData)
</script>
<style lang="postcss">

</style>