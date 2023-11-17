
  <div class=" w-[250px] custom  bg-white ">
    <div class="flex flex-col overflow-hidden h-full ">
      <div class="p-12">
        <img class="w-full  h-full object-cover object-center " src="{listingData.media[0]}" alt="Sunset in the mountains">
      </div>
      <div class="h-full pt-6 px-3 custom-bg w-full mt-auto">
        <div class="mt-auto h-full">
          <h3 class="font-bold text-xl mb-2">{listingData.title}</h3>
          <p>Listed {formatDate(listingData.created)}</p>
          <p class="text-gray-700  text-sm">
            {listingData.description}
          </p>
          <p class="py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ends at {formatDate(listingData.endsAt)}</p>
        </div>
      </div>
    </div>

  </div>
<script>
export let listingData

function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
}
</script>
<style lang="postcss">

  .custom-bg{
    background-color: #ebe9e9;
  }
.custom{
  height: inherit !important;
}
</style>