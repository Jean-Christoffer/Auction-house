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
{isFilled ? "border-none" : "border-gray-700"}
{isMobile ? "p-2" : "p-3"}
{isFilled ? "bg-black" : ""}

{isMobile ? "text-base" : "text-xl"}
{isFilled ? "text-white" : ""}
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