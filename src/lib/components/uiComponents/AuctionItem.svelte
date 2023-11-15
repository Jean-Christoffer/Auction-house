<div class="max-w-sm rounded overflow-hidden shadow-lg h-full flex flex-col ">
 
    <img class="w-full block h-full object-cover" src="{listingData.media[0]}" alt="Sunset in the mountains">
    <div class="px-6 py-4  mt-auto">
      <h3 class="font-bold text-xl mb-2">{listingData.title}</h3>
      <p>Listed {formatDate(listingData.endsAt)}</p>
      <p class="text-gray-700 text-base">
        {listingData.description}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 mt-auto">
      <p class="py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Ends at {formatDate(listingData.endsAt)}</p>
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