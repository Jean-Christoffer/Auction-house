{#if profileData !== null}
<div  class="w-full overflow-hidden relative customHeight" >
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
  <div class="mt-auto md:container md:mx-auto relative z-2 ">
    <h1 class="text-4xl shadow">
      Welcome back {profileData.name}
    </h1>
    <strong><p class="shadow">{memberStatus
    .substring(0,1)
    .toLocaleUpperCase()
     + memberStatus.substring(1)} member</p></strong>
  </div>

  <div class="relative z-2 mt-auto pb-2">
  <ProfileCard 
    profileData = {profileData} />
  </div>
</div>   
<div >

<ProfileNav
profileData={profileData}
 showListings={handleShowListings}
createAuction={handleShowForm}
isDisabledForm={isFormDisabled}
isDisabledListings={isListingDisabled} />
{#if showForm}
<CreateAuction />
{:else}
<div  class="md:container md:mx-auto h-full">
<div  class="flex flex-wrap items-stretch gap-1 h-full justify-start py-3"> 
    {#each profileData.listings as myListing}
    <a href="/auctionItem/{myListing.id}">
      <AuctionItem  listingData =  {myListing}/> 
    </a>
    {/each }
</div>
</div>
{/if}
</div>
    {:else}
    <h1>Please log in to see your profile</h1>
{/if}
<script>
import ProfileCard from '$lib/components/profileComponents/ProfileCard.svelte';
import ProfileNav from '$lib/components/profileComponents/ProfileNav.svelte';
import CreateAuction from '$lib/components/forms/CreateAuction.svelte';
import AuctionItem from '$lib/components/auctionItems/AuctionItem.svelte';
export let data

   let profileData
   let wins
   let memberStatus = "bronze"
   $: {
    if(data){
        profileData = data.props.data
        wins = profileData?.wins.length
      
    }else{
        profileData = null
    }
   }
  $: console.log(profileData)
  let showForm = false
  let showListings = true
  
   let isFormDisabled = false

   let isListingDisabled = true

  function handleShowListings(){
    showListings = !showListings
    showForm = !showForm

    isListingDisabled= !isListingDisabled
    isFormDisabled= !isFormDisabled
  }
  function handleShowForm(){
    showForm = !showForm
    showListings = !showListings

    isFormDisabled= !isFormDisabled
    isListingDisabled= !isListingDisabled
  }


  switch (wins) {
                case wins > 4:
                   memberStatus = "bronze";
                   break;
                    case wins> 5:
                     memberStatus = "silver";
                     break;
                    case wins > 9:
                     memberStatus = "gold"
                     break;
                default:
                     memberStatus = "bronze";
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
</style>