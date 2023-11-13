
{#if isVisible}
<aside   in:fade="{fadeIn}" out:fade="{fadeOut}">
	<div class="w-screen h-screen overflow-hidden fixed top-0 left-0 flex items-center justify-center">
		<div class="absolute top-0 h-full left-0 w-full customColor"  />
		<div  
		   out:slide={{ delay: 60, duration: 2000,  axis: 'x', }}
		   class:expanded={isVisible}
		   class=" absolute top-0 h-full right-0 opacity-100 bg-white overflow-hidden customWidth">
			<div class="box-border py-8 px-10 overflow-auto h-full relative" >
	
				<button  on:click={handleVisible} class="customLink inline-block tracking-tight uppercase cursor-pointer transition-all">Close</button>

				<div class="pt-6" >
					<h3 class="mb-3">Search lot</h3>
					<p class="customText">Search by lot number or keyword</p>

					<form class="flex">
						<Input />
						<InputButton inputType={"button"} buttonText={"Search"} />  
					</form>
                    {#if results}
					<SearchResults />
					{:else}
					<div />
					<div >
						<p >
							Nothing found. Please try again <br /> with different keywords.
						</p>
					</div>

					{/if}
				</div>
			</div>
		</div>

	</div>
</aside>
{/if}
<script>
	import InputButton from "./uiComponents/InputButton.svelte";
	import Input from "./uiComponents/Input.svelte"
	import SearchResults from "./SearchResults.svelte";
	import { fade } from 'svelte/transition';
	import { slide } from 'svelte/transition';

	let results = false
	/**
    * @type {boolean}
    */
	export let isVisible 
	/**
    * @type {onclick}
    */
	export let handleVisible

	const fadeIn = {
		delay: 100,
		duration: 200
	}
	
	const fadeOut = {
		delay: 0,
		duration: 100
	}
</script>
<style lang="postcss">

    .customColor{
        background-color:  rgba(0,0,0,.6);
    }
    .customWidth{
		width: 457px;
    }
    .customLink{
        font-size: 12px;
        border-bottom: 1px dotted #202020;
        color: #202020;
    }
    .customText{
        font-size: 16px;
    line-height: 30px;
    }
	.expanded{
		animation: showFromRight .35s ease-in-out forwards;
	}

	@keyframes showFromRight {
		0% {
			right: -50px;
			opacity: 0;
		}

		100% {
			opacity: 1;
			right: 0;
		}
	}


</style>