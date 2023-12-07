<a 
href={href}
class="
block
w-full
cursor-pointer
border-solid 
border-2
font-bold  
text-center

{isFilled ? "hover:bg-gray-700" : "hover:bg-black"}
{isFilled ? "hover:text-white" : "hover:text-white"}
{isFilled ? "border-none" : "customBorder"}
{isMobile ? "p-2" : "p-3"}
{isFilled ? "bg-black" : ""}

{isMobile ? "text-base" : "text-xl"}

{textColor === "black" ? "text-black" : "text-white"}
">{linkText}
</a>

<script lang="ts">
export let linkText:string
export let href:string
export let isMobile:boolean
export let isFilled:boolean
export let textColor:string = ""
</script>
<style lang="postcss">

    .customBorder{
        border: 1px solid #F2F2F2;
     
    }

</style>