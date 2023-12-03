<section class=" filter w-full pl-2">
    <div class="container mx-auto ">

        <div class="relative z-2 mb-5">
            <h1 class="text-4xl shadow">
              Welcome back {profileData.name}
            </h1>
        </div>

        <div class="flex align-center gap-5">
            <button  on:click={() => mediaModal.showModal()}  >
                <div class="custom-container">
                    <img src="{profileData.avatar}" alt="profileImage" class="  object-cover object-center w-full block h-full profileImg" />
                    <div  class="hover w-full block h-full">
            
                        
                    </div> 
                    <div class="w-full flex align-center items-center h-full justify-center custom-bg">
                        <p class="text-center shadow">
                            <small>
                                <strong>change avatar</strong>
                            </small>
                        </p>
                    </div>
                </div>
            </button>
            <div class="flex flex-col justify-center gap-2">
                <p>Balance: ${profileData.credits}</p>
                    <div>
                        <strong>
                            <p>
                                {memberStatus
                                .substring(0,1)
                                .toLocaleUpperCase()
                                + memberStatus.substring(1)}
                                member
                            </p>
                        </strong>
                </div>
                {#if profileData.wins.length > 0}
                    <p>You have won {profileData.wins.length} auctions! </p>
                    {:else}
                    <p>No wins yet! </p>
                {/if}
            </div>
        </div>
        <dialog id="mediaModal" class="modal rounded px-8 pt-6 pb-8 customBg shadow-md ">
            <button class="btn ml-auto text-black"  on:click={() => mediaModal.close()}>Close</button>
          <div class="modal-box">
            <div class="modal-action ">
                <UpdateMedia form={form} />
            </div>
          </div>
        </dialog>
    </div>
</section>
<script>
export let profileData = {}
export let memberStatus
export let form
import UpdateMedia from "../forms/updateMedia.svelte";
console.log(profileData)
</script>
<style lang="postcss">
    .shadow{
        text-shadow: 0px 4px 30px #000000;
    }
    .custom-bg{
        position: relative;
        z-index: 100;
        background-color: rgba(189, 185, 185, 0.205);
    }
    .custom-container{
        width: 120px;
        height: 120px;
        overflow: hidden;
        border-radius: 50%;
        border: 3px solid #202020;
        position: relative;
    }
    .hover{
        display: none;
        filter: grayscale(100%);
        background-image: url("$lib/images/27002.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        display: none;
        position: absolute;
        inset: 0;
        overflow: hidden;
        opacity: .5;
        
    }
    .custom-container:hover .hover{
        display: block;
        text-align: center;

    }
    .custom-container:hover .profileImg{
        display: none;
    }
    .filter{
        backdrop-filter: blur(2px);
    }

</style>