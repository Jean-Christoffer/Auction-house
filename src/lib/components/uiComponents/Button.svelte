<button
class="
w-full
bg-black
hover:bg-gray-700
text-white 
text-center
font-bold 
py-2 px-4 
text-l

disabled:opacity-50
disabled:cursor-not-allowed
disabled:hover:bg-black
"
disabled = {isDisabled}

>
    {buttonText}
</button>
<script>
    /**
     * @type {string}
    */
   export let buttonText
 /**
     * @type {boleean}
    */
   export let isDisabled = false


   
</script>