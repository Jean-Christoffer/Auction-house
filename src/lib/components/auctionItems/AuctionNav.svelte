<div class="sticky md:top-[68px] top-[74px]  w-full block">
<nav class="block w-full customBg text-white relative z-2 px-2 py-2">
    <div class="w-full custom-width flex items-center justify-between container mx-auto flex-wrap gap-2">
        <div class="flex items-center gap-2">
            <p><strong>Showing</strong></p>
            <p><small><em>({listings.length})</em></small> items</p>
        </div>
        <div >
            <Select 
             selectedValue= {selectedValue}
             setSelectedValue={setSelectedValue}
            />

        </div>
    </div>
</nav>
</div>
<script lang="ts">
    export let listings
    import Select from "../uiComponents/Select.svelte";
    export let selectedValue:string = '';
    export let setSelectedValue : (event: Event) => void;
</script>
<style lang="postcss">
.customBg{
        background-color: #202020;
    }

</style>