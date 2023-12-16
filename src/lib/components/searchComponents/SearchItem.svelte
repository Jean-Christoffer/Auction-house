<figure class="border-b border-gray-300 mt-3" id="{searchData.id}">
    <p class="text-xs leading-5 mb-5">Listed {formatDate(searchData.created)}</p>
    <article class="text-gray-800 flex items-center mb-10">
        <div class="w-20 h-20 mr-6">
            <img loading="lazy" class="max-w-[80px] max-h-[80px] mx-auto block relative top-1/2 -translate-y-1/2" alt="" src="{searchData.media.length ? searchData.media[0] : ""}"/>
        </div>
        <div class="max-w-[210px]">
            <h4 class="breaks text-sm leading-5  font-semibold text-black">{truncateDescription(searchData.title)??""}</h4>
            <p class="breaks break-all">{truncateDescription(searchData.description) ?? ""}</p>
            <p class="breaks text-xs leading-5">Ends at: {formatDate(searchData.endsAt)}</p>
            <p class="breaks text-xs leading-5">Current bids {searchData._count?.bids}</p>
        </div>

    </article>

</figure>
<script lang="ts">
export let searchData:AuctionItemTypes
function formatDate(dateString:string) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
}
function truncateDescription(text:string) {
        const sentence = text
        const sentences = sentence?.split('');
        if (sentences?.length > 65) {
          let splittedText = sentences.slice(0, 65).join('') + '.';
          
          return splittedText
        }
        return sentence
    }
</script>
<style lang="postcss">
    .breaks{
        word-wrap: break-word;
    }
    .break-all{
        word-break: break-all;
    }
</style>
