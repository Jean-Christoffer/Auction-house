
  <div class=" w-[250px] custom  bg-white flex flex-col h-full " id="{listingData.id}">
    <div class="flex flex-col overflow-hidden h-full ">
      <div class="p-12">
        <div class="customWidth">
          <img class="w-full h-auto object-contain object-center " src="{listingData.media[0]}" alt="">
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
          {#if listingData?.bids?.length > 0 && listingData.bids}
            <p>
              <strong><small>Current bid</small></strong>
              ${listingData.bids[listingData.bids.length - 1].amount}
            </p>
          {/if}
        </div>
      </div>
    </div>

  </div>
<script>
export let listingData
let description
function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
}
function truncateDescription(text) {
        const sentence = text
        const sentences = sentence?.split('. ');
        if (sentences?.length > 1) {
          let splittedText = sentences.slice(0, 1).join('. ') + '.';
          
          return splittedText
        }
        return sentence
    }

</script>
<style lang="postcss">

  .custom-bg{
    background-color: #ebe9e9;
  }

.customWidth{
  max-width: 150px;
  height: 100px;
  aspect-ratio: 16/10;
  overflow: hidden;
}
</style>