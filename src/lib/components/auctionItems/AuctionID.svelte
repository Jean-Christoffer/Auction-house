<section  class="md:container md:mx-auto my-10 h-full p-2 m-auto flex justify-center">
    {#if data && $authStore.token}
    <figure class="custom-grid ">
        <div >
            <div class="custom-width">
                <img class="w-full block h-full object-cover object-center" src="{data.media[0]}" /> 
            </div>
            {#if data.bids.length > 0}
            <p class="mt-2">Current bid <strong>${data?.bids[data?.bids?.length - 1].amount}</strong></p>
            {:else}
            <p>Be the first to bid on this item</p>
            {/if}
            <p>Auction ends in {timeRemaining} </p>
        </div>
        <article class="max-w-sm">
            <h2 class="text-4xl">{data.title}</h2>
            <p>{data.description}</p>
            <BidForm id={data.id} amountToBid = {data?.bids?.length > 0 ? data?.bids[data?.bids?.length - 1].amount : 0}/>
        </article>
    </figure>
    {:else}
    <div class="flex justify-center py-10">
        <h1 class="text-4xl">
            <a href="/login">Please login to view auction details</a>
         </h1>
    </div>
    {/if}
</section>

<script>
    export let data
    import { onMount } from 'svelte';
    import BidForm from '../forms/BidForm.svelte';
	import { authStore } from '$lib/data/authstore';


        let timeRemaining = '';
        $: {
            
            if (data ) {
                updateTimeRemaining();
            }
         }
        //lets make a countdown ;s

        function updateTimeRemaining() {
        
            const endDate = new Date(data.endsAt);
            const now = new Date();
            const timeDiff = endDate - now;

            if (timeDiff <= 0) {
            timeRemaining = 'Auction ended';
            return;
            }

    
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            timeRemaining = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

        }

        onMount(() => {
      
            const interval = setInterval(updateTimeRemaining, 1000);

            return () => {
            clearInterval(interval); 
            };
        });
</script>
<style lang="postcss">
    .custom-width{
        max-width: 600px;
        height: 500px;
    }
    .custom-grid{
        display: grid;
        grid-template-columns: minmax(150px,600px) 1fr;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
</style>