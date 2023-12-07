<div class="sticky top-[69px] w-full block">
    <nav class="block w-full customBg text-white relative z-2 px-2 py-2">
        <div class="w-full md:container md:mx-auto flex items-center gap-5">
       
            <div class="flex items-center gap-2">
                <button class="
                block
                w-full 
                border 
                border-gray-300 
                custom-bg 
                py-2 px-3 
                
                text-center  
                rounded 
                leading-tight" on:click={() => auctionModal.showModal()}>Create auction</button>
            </div>
            
            <div >
                <p>My listings <small>({profileData?._count.listings})</small></p>
            </div>
        </div>
    
    </nav>
    </div>
    
    <dialog id="auctionModal" class="modal rounded px-8 pt-6 pb-8 customBg shadow-md " bind:this={auctionModal}>
        <button class="btn ml-auto text-white"  on:click={() => auctionModal.close()}>Close</button>
      <div class="modal-box">
        <div class="modal-action ">
          <CreateAuction form={form} />
        </div>
      </div>
    </dialog>


    <script lang="ts">
        export let profileData:ProfileData
        export let form:FormData
        import CreateAuction from "../forms/CreateAuction.svelte";
        let auctionModal: HTMLDialogElement  
    </script>
    <style lang="postcss">
    .customBg{
            background-color: #202020;
        }

    </style>