{#if userData !== null}
<div  class="w-full overflow-hidden relative customHeight flex flex-col justify-center " >
          <div class="absolute
          top-0 
          left-0 
          w-full 
          h-full 
          bg-cover
          bg-center 
          animate
          {memberStatus}"
          ></div>
          <div class="bg-overlay"></div>
          <ProfileCard profileData = {userData} memberStatus = {memberStatus} />
          
</div> 
        <ProfileNav profileData ={userData} />  

          <div  class="container mx-auto h-full">
          <div  class="flex flex-wrap items-stretch gap-1 h-full justify-center py-5 md:justify-start"> 
              {#each userData.listings as myListing}
              <a href="/auctionItem/{myListing.id}">
                <AuctionItem  listingData =  {myListing}/> 
              </a>
              {/each }
        </div>
  </div>


    {:else}
    <h1>Please log in to see your profile</h1>
{/if}
<script>
import ProfileCard from '$lib/components/profileComponents/ProfileCard.svelte';
import ProfileNav from '$lib/components/profileComponents/ProfileNav.svelte';
import AuctionItem from '$lib/components/auctionItems/AuctionItem.svelte';
export let data

   let userData = {}
   let wins = 2
   let memberStatus = "silver"




$: {
  if(data){
    const {profileData} = data
    userData = profileData
    wins = userData?.wins?.length
  }
  switch (wins) {
    
    case wins > 1:
     memberStatus = "silver";
     break;
    case wins > 2:
     memberStatus = "gold"
     break;
    default:
        memberStatus = "silver";
    }
}




</script>
<style lang="postcss">
      .animate{
        -webkit-animation: scalingBack 45s ease-in infinite;
        animation: scalingBack 45s ease-in infinite;
        -webkit-animation-play-state: running;
        animation-play-state: running;
        
   

    }
    .animate.bronze{
      background-image: url("./bronze.jpg");
    }
    .animate.silver{
      background-image: url("./silver.jpg");
    }
    .animate.gold{
      background-image: url("./gold.jpg");
    }
    .bg-overlay{
  position: absolute;
  inset: 0;
  background-color: #f2f2f242

}
    .customHeight{
    height: 60vh;
    display: flex;
    flex-direction: column;
}
  @keyframes scalingBack{
    0% {
    transform: scale(1.1);
}
    50% {
    transform: scale(1);
}
    100% {
    transform: scale(1.1);
}
}
.shadow{
  text-shadow: 0px 4px 30px #000000;
}
.custom-width{
        max-width: 1010px;
        margin: 0 auto;
    }
</style>