<div class="
flex 
items-center 
gap-2">
<div class="w-50">
    <select 
    bind:value={selectedValue} 
    on:change={setSelectedValue}
    class="
     block
     w-full 
     border 
     border-gray-300 
     custom-bg 
     py-2 px-3 
     pr-8 
     rounded 
     leading-tight 
     focus:outline-none 
     focus:bg-black 
     focus:border-gray-500">
        <option value="">SORT BY</option>
        <option value="lowHigh">Price low-high</option>
        <option value="highLow">Price high-low</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
        <option value="soon">Ending soon</option>
        <option value="later">Ending due time</option>
    </select>
</div>

</div>
<script lang="ts">
  export let selectedValue:string = '';
  export let setSelectedValue: (event: Event) => void;
</script>
<style lang="postcss">
    .custom-bg{
        background-color: #202020;
    }
</style>