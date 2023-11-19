
  <div class=" w-[250px] custom  bg-white flex flex-col " id="{listingData.id}">
    <div class="flex flex-col overflow-hidden h-full ">
      <div class="p-12">
        <div class="customWidth">
          <img class="w-full block  h-full object-contain object-center " src="{listingData.media[0]}" alt="">
        </div>
      </div>
      <div class="h-full pt-6 px-3 custom-bg w-full flex flex-col">
        <div class="mt-auto">
          <h3 class="font-bold text-xl mb-2">{listingData.title}</h3>
          <p>Listed {formatDate(listingData.created)}</p>
          <p class="text-gray-700  text-sm" id="description" bind:this={description}>
            {truncateDescription(listingData.description)}
          </p>
          <p class="py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ends at {formatDate(listingData.endsAt)}</p>
          {#if listingData.bids.length > 0 && listingData.bids}
            <p class="pb-1">
              <strong>Current bid</strong>
              <em>{listingData.bids[listingData.bids.length - 1].amount} $</em>
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
        if (sentences?.length > 2) {
          let splittedText = sentences.slice(0, 2).join('. ') + '.';
          
          return splittedText
        }
        return sentence
    }

</script>
<style lang="postcss">

  .custom-bg{
    background-color: #ebe9e9;
  }
.custom{

}
.customWidth{
  max-width: 150px;
  height: 100px;
}
</style>