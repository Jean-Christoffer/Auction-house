<div class="sticky top-[69px] w-full block">
    <nav class="block w-full customBg text-white relative z-2 px-2 py-2">
        <div class="w-full md:container md:mx-auto flex items-center gap-5">
            <div class="flex items-center gap-2">
                <button on:click={createAuction} disabled = {isDisabledForm}>Create auction</button>
            </div>
            <div >
                <button on:click={showListings}  disabled = {isDisabledListings}>My listings <small>({profileData?._count.listings})</small></button>
            </div>
        </div>
    
    </nav>
    </div>
    <script>
        export let showListings
        export let createAuction
        export let profileData
        export let isDisabledForm
        export let isDisabledListings
    </script>
    <style lang="postcss">
    .customBg{
            background-color: #202020;
        }

    </style>