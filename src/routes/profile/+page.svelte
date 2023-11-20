{#if profileData !== null}
<div class="py-3">


<ProfileCard 
profileData = {profileData} />
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
   $: {
    if(data){
        profileData = data.props.data
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
</script>