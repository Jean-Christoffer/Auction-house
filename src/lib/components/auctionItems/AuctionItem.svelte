
  <div class=" w-[250px] custom  bg-white flex flex-col h-full " id="{listingData.id}">
    <div class="flex flex-col overflow-hidden h-full ">
      <div class="p-12">
        <div class="customWidth">
          <img class="w-full h-auto object-cover object-center block" src="{listingData.media[0]}" alt="" loading="lazy">
          
        </div>
      </div>
      <div class="h-full pt-6 px-3 custom-bg w-full flex flex-col text-left">
        <div class="mt-auto">
          <p><small>Listed {formatDate(listingData.created)}</small></p>
          <h3 class="font-bold text-xl mb-2">{truncateDescription(listingData.title)}</h3>
          <p class="text-gray-700  text-sm" id="description" bind:this={description}>
            {truncateDescription(listingData.description)}
          </p>
        </div>
        <div class="mt-auto pb-2 pt-2">
          <p class="text-sm font-semibold text-gray-700 mr-2">Ends at {formatDate(listingData.endsAt)}</p>
          {#if sortedBids.length > 0 && sortedBids}
            <p>
              <strong><small>Current bid</small></strong>
              ${sortedBids[sortedBids.length - 1].amount}
            </p>
          {/if}
        </div>
      </div>
    </div>

  </div>
<script lang="ts">
export let listingData:AuctionItemTypes
let description
let sortedBids:Bids[] = []

function formatDate(dateString: string | number | Date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
}
function truncateDescription(text:string) {
        const sentence = text
        const sentences = sentence?.split('. ');
        if (sentences?.length > 1) {
          let splittedText = sentences.slice(0, 1).join('. ') + '.';
          
          return splittedText
        }
        return sentence
    }
$:{
        if(listingData.bids){
          let bidHistory = listingData.bids
                sortedBids = [...bidHistory].sort((a, b) => {
                const date1 = new Date(a.created);
                const date2 = new Date(b.created);
                    return date1.getTime() - date2.getTime()
                
            });
        }

}
</script>
<style lang="postcss">

  .custom-bg{
    background-color: #ebe9e9;
  }

.customWidth{
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16/10;
  overflow: hidden;
}
</style>