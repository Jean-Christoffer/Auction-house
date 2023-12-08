<svelte:head>
  <title>Profile</title>
  <meta name="description" content="View your listings, or create a new auction!">
</svelte:head>
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
          <ProfileCard profileData = {userData} memberStatus = {memberStatus} form={form} />
          
</div> 
        <ProfileNav profileData ={userData} form={form} />  

          <div  class="container mx-auto h-full">
          <div  class="flex flex-wrap items-stretch gap-9 h-full justify-center py-5 md:justify-center mt-5 mb-5"> 
              {#each userData?.listings as myListing} 
                <a href="/auctionItem/{myListing.id}">
                  <AuctionItem  listingData =  {myListing}/> 
                </a>
              {/each }
        </div>
  </div>
    {:else}
    <h1>Please log in to see your profile</h1>
{/if}
<script lang="ts">
import ProfileCard from '$lib/components/profileComponents/ProfileCard.svelte';
import ProfileNav from '$lib/components/profileComponents/ProfileNav.svelte';
import AuctionItem from '$lib/components/auctionItems/AuctionItem.svelte';

export let data
export let form:ExtendedFormData  
let userData:ProfileData
let wins
let memberStatus = ""
$: {
  if(data){
    const {profileData} = data
    userData = profileData
    wins = userData?.wins?.length
 
    if(wins){
      if(wins < 3){
        memberStatus = "bronze"
      }else if(wins === 3){
        memberStatus = "silver"
      }else if(wins >= 5){
        memberStatus = "gold"
      }
    }
  }

}
const today = new Date();
today.setHours(0, 0, 0, 0);


</script>
<style lang="postcss">
      .animate{
        -webkit-animation: scalingBack 45s ease-in infinite;
        animation: scalingBack 45s ease-in infinite;
        -webkit-animation-play-state: running;
        animation-play-state: running;
        }
    .animate.bronze{
      background-image: url("$lib/images/bronze.jpg");
    }
    .animate.silver{
      background-image: url("$lib/images/silver.jpg");
    }
    .animate.gold{
      background-image: url("$lib/images/gold.jpg");
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