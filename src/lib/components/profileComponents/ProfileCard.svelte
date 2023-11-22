<section class=" filter w-full">
    <div class="md:container md:mx-auto  flex align-center">
        <div class="custom-container">
            <img src="https://avatars.githubusercontent.com/u/89041011?s=400&u=191252f2145d0d41604458f6f744d1a112230499&v=4" class="w-full block h-full" /> 
        </div>

        <div class="flex flex-col justify-center gap-2">
            <p>$ {profileData.credits}</p>
            {#if profileData.wins.length > 0}
                <p>You have won {profileData.wins.length} auctions! </p>
                {:else}
                <p>No wins yet! </p>
            {/if}
        </div>
    
    </div>
</section>
<script>
export let profileData = {}
let memberType
</script>
<style lang="postcss">
    .custom-container{
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #F2F2F2;
    }
    .filter{
        backdrop-filter: blur(2px);
    }
</style>