<section class="md:container md:mx-auto">
    <div class="custom-container">
        <img src="https://avatars.githubusercontent.com/u/89041011?s=400&u=191252f2145d0d41604458f6f744d1a112230499&v=4" class="w-full block h-full" /> 
    </div>
    <p>{profileData.name}</p>
    <div class=" flex items-center gap-2">
        <p>$ {profileData.credits}</p>
        {#if profileData.wins.length > 0}
            <p>You have won {profileData.wins.length} auctions! </p>
            {:else}
            <p>No wins yet! </p>
        {/if}
    </div>
  

</section>
<script>
export let profileData = {}
let memberType
</script>
<style lang="postcss">
    .custom-container{
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #F2F2F2;
    }
</style>