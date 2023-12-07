<button
class="
w-full
{warning ? "bg-red-600" : "bg-black"}
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
<script lang="ts">
   export let buttonText:string
   export let isDisabled:boolean = false
   export let warning:boolean = false
   
</script>