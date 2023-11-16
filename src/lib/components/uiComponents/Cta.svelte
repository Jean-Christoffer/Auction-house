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
{isFilled ? "text-white" : "customColor"}
">{linkText}
</a>

<script>
/**
* @type {string}
*/
export let linkText
/**
* @type {string}
*/
export let href
/**
* @type {boolean}
*/
export let isMobile
/**
* @type {boolean}
*/
export let isFilled
</script>
<style lang="postcss">

    .customBorder{
        border: 1px solid #F2F2F2;
     
    }
    .customColor{
        color: #F2F2F2;
        text-shadow: 0px 4px 30px #000000;
    }
</style>