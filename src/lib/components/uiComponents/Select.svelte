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
        <option value="lowHigh">Price lowest-high</option>
        <option value="highLow">Price high-low</option>
        <option value="new">Listed newest</option>
        <option value="old">Listed oldest</option>
        <option value="soon">Ends soon</option>
        <option value="later">Ends latest</option>
        <!-- Add more user options here -->
    </select>
</div>
<div class="w-50">
    <select class="block 
    w-full 
    border 
    border-gray-300 
    custom-bg 
    py-2 px-3 
    pr-8 rounded 
    leading-tight 
    focus:outline-none 
    focus:bg-black 
    focus:border-gray-500">
        <option value="">FILTER</option>
        <option value="hasBids">no bids</option>
        <option value="noBids">has bids</option>
        <!-- Add more user options here -->
    </select>
</div>
</div>
<script>
  export let selectedValue = '';
  export let setSelectedValue
</script>
<style lang="postcss">
    .custom-bg{
        background-color: #202020;
    }
</style>