{#if show}
<div  in:fade={{ delay: 250, duration: 300 }} out:fade={{ delay: 250, duration: 300 }}
 class="border {isSuccess ? "bg-green-100" : "bg-red-100  " }  {isSuccess ? "border-green-400" : "border-red-400"}  {isSuccess ? "text-green-700" : "text-red-700"} px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">{status}!</strong>
    <span class="block sm:inline">{message}.</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <button on:click={() => show = !show}>
        <svg class="fill-current h-6 w-6   {isSuccess ? " text-green-500" : " text-red-500  " }"
         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <title>Close</title>
        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </button>
    </span>
  </div>
  {/if}
  <script lang="ts">
    import { fade } from 'svelte/transition';
    export let isSuccess:boolean = true
    export let status:string = ""
    export let message:string = ""
    export let show:boolean = false
    $:{
      if(show = true){
        setTimeout(()=>{return show = false},3500)
      }
    }
  </script>