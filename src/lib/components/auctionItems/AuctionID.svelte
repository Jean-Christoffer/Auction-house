<section  class="md:container md:mx-auto my-10 h-full p-2 m-auto flex justify-center">
    {#if data}
    <figure class="custom-grid ">
        <div class="grid-item1">
            <div class="custom-width">
  
          
                <img class="w-full block h-full object-cover object-center aspect-square" src="{data.media[0]}" alt="{data.title}" />
       
                <p><strong>Auction ends in {timeRemaining} </strong></p>
            </div>
       
        </div>
        <article class="max-w-sm grid-item2">
            <h2 class="text-4xl">{data.title}</h2>
            <p>{data.description}</p>
            {#if sortedBids.length > 0 && sortedBids}
            <ul class="text-black mt-1 custom-ul">
                <div class="custom-container-scroll flex flex-col gap-1" >
                    <h2 class="underline decoration-solid mb-1">Bid history</h2>
                    {#each sortedBids as bid}
        
                    <li class="border border-solid p-1.5 border-1 border-gray-600" > 
                        <small class="flex justify-between"> 
                         <p>{dayjs(bid.created).fromNow()} </p>  
                         <p><strong>${bid.amount}</strong></p>
                    
                        </small>
                    </li>
                    {/each}
                </div>
            </ul>
            <p class="mt-2">Current bid <strong >${sortedBids[sortedBids?.length - 1].amount}</strong></p>
            {:else}
            <p><small>Be the first to bid on this item</small></p>
            {/if}
            <BidForm  amountToBid = {sortedBids?.length > 0 ? sortedBids[sortedBids?.length - 1].amount : 0} form={form}/>
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
    /**
	 * @type {{ endsAt: string | number | Date; media: any[]; title: any; description: any; bids: string | any[]; }}
	 */
     export let data

   
     /**
	 * @type {string | any[]}
	 */
     let sortedBids
    import { onMount } from 'svelte';
    import BidForm from '../forms/BidForm.svelte';
    import relativeTime from 'dayjs/plugin/relativeTime';
	import dayjs from 'dayjs';


    /**
	 * @type {FormData}
	 */
     export let form

    dayjs.extend(relativeTime);
    $:  updateTimeRemaining();
        let timeRemaining = '';
        $: {
            
            if (data.bids ) {
              

                let bidHistory = data.bids
                sortedBids = [...bidHistory].sort((a, b) => {
                const date1 = new Date(a.created);
                const date2 = new Date(b.created);
                    return date1.getTime() - date2.getTime()
                
            });
        
            }
         }
        //lets make a countdown ;s

        function updateTimeRemaining() {
        
            const endDate = new Date(data.endsAt);
            const now = new Date();
            const timeDiff = endDate.getTime() - now.getTime();

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
        max-width: 550px;
       
    }
    .custom-grid{
        display: grid;
        grid-template-columns: minmax(150px,600px) 1fr;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .grid-item1{
        grid-column: 1;
    }
    .grid-item2{
        grid-column: 2;
    }
    @media(max-width:1026px){
        .custom-grid{
            grid-template-columns:  1fr;
            justify-items: center;
            gap: 0;
        }   
        .grid-item1{
        grid-column: 1;
        padding: 16px;
    }
    .grid-item2{
        grid-column: 1;
        padding: 16px;
    }
    }
    .custom-ul{
        max-width: 100%;
        


    }
    .custom-container-scroll{
      
            border: 1px solid #202020;
            border-radius: 4px;
            max-height: 200px;
            width: 100%;
            overflow: auto;
            padding: 10px 10px;
            scroll-behavior: smooth;
    }
    .custom-container-scroll::-webkit-scrollbar {
            width: 12px;
        }
        
        .custom-container-scroll::-webkit-scrollbar-track {
            border-radius: 8px;
            background-color: #e7e7e7;
            border: 1px solid #cacaca;
            box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        }
        
        .custom-container-scroll::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: #363636;
        }
</style>