<section  class="md:container md:mx-auto my-10 h-full p-2 m-auto flex justify-center">
    {#if data }
    {@const mediaGallery = data.media}
    <figure class="custom-grid ">
        <div class="grid-item1">
            {#if !auctionEnded}
            <figure class="custom-timer">
                <div class="days">
                    <h2 class="text-4xl">{days}</h2>
                    <p><small>Days</small></p>
                </div>    
                <div class="hours">
                    <h2 class="text-4xl">{hours}</h2>
                    <p><small>Hours</small></p>
                </div>
                <div class="minutes">
                    <h2 class="text-4xl">{minutes}</h2>
                    <p><small>Minutes</small></p>
                </div>
                <div class="seconds">
                    <h2 class="text-4xl">{seconds}</h2>
                    <p><small>Seconds</small></p>
                </div>
            </figure>
            {/if}
            <div class="custom-width media-gallery">
                      <MediaGallery data={mediaGallery} />
                     {#if auctionEnded}
                     <p>Auction has ended</p>
                     {/if}
            </div>
            <div class="remove-item">
                <RemoveListing />
            </div>
     
        </div>

        
 
        <article class="max-w-sm grid-item2">
            <h2 class="text-4xl">{data.title}</h2>
            <p>{data.description}</p>
            {#if sortedBids.length > 0  && sortedBids}
            <ul class="text-black mt-1 custom-ul">
                <div class="custom-container-scroll border border-gray-400 flex flex-col gap-1" >
                    <h2 class=" mb-1">Bid history</h2>
                    {#each sortedBids as bid}
        
                    <li class="border-t border-gray-400 border-solid p-1.5 border-1 border-gray-600" > 
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
            <p><small>No bids yet</small></p>
            {/if}
            <EditListing form={form}/>
 
  
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

<script lang="ts">
    export let data:AuctionItemTypes
    export let form:ExtendedFormData
    import { onMount } from 'svelte';
    import EditListing from '../forms/EditListing.svelte';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    import RemoveListing from '../forms/RemoveListing.svelte';
    import MediaGallery from './MediaGallery.svelte';
    let sortedBids:Bids[]

    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0
    let auctionEnded = false
    dayjs.extend(relativeTime);
        let timeRemaining = '';
        $: {
            
            if (data.bids ) {
                updateTimeRemaining();

                let bidHistory = data.bids
                sortedBids = [...bidHistory].sort((a, b) => {
                const date1 = new Date(a.created);
                const date2 = new Date(b.created);
                    return date1.getTime() - date2.getTime()
                
            });
        
            }
         }
        function updateTimeRemaining() {
        
            const endDate = new Date(data.endsAt);
            const now = new Date();
            const timeDiff = endDate.getTime() - now.getTime();

            if (timeDiff <= 0) {
                auctionEnded = true
            return;
            }

    
             days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
             hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
             seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            //timeRemaining = `Auction ends in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;

        }

        onMount(() => {
      
            const interval = setInterval(updateTimeRemaining, 1000);

            return () => {
            clearInterval(interval); 
            };
        });

</script>
<style lang="postcss">
    .custom-timer{
        display: flex;
        flex-direction: column;
    }
    .custom-width{
        max-width: 550px;
       
    }
    
    .custom-grid{
        display: grid;
        grid-template-columns: minmax(150px,700px) 1fr;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .grid-item1{
        grid-column: 1;
        align-self: start;

        display: grid;
        grid-template-columns: 70px 1fr;
    }
    .media-gallery{
        grid-column: 2/3;
    }
    .remove-item{
        grid-column: 2;
        grid-row: 2;
        margin-top: 20px;
        justify-self: center;
    }
    .grid-item2{
        grid-column: 2;
        align-self: start;
    }
    .grid-item3{
        grid-column: 1;
        grid-row: 2;
    }
    @media(max-width:1020px){
        .custom-grid{
            grid-template-columns:1fr;
            justify-items: center;
            gap: 0;
        }   
        .grid-item1{
        grid-column: 1;
        padding: 16px;

        grid-template-columns: 1fr 1fr;
        justify-items: center;
        grid-template-rows: 3fr;
    }
    .custom-timer{
        grid-row: 2;
        grid-column: 1/3;
     
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    .media-gallery{
        grid-column: 1/3;
    }
    .remove-item{
        grid-row: 3;
        grid-column: 1/3;
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