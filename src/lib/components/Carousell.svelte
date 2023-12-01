{#if !isMediaGallery}
<div  class="carousell hideScroll">
    <div  class="inner-carousell hideScroll">
        {#each itemsData as item (item.id)}
   
                <a href="/auctionItem/{item.id}"  class="customWidth flex items-stretch" id= {item.id} animate:flip={{duration:500}}>
                    <AuctionItem listingData={item}/>
                </a>
        {/each}
    </div>
    <button class="left" on:click={rotateLeft}>
 
            <svg width="32" height="63" viewBox="0 0 32 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5684 0.96582L0.339545 31.1946L31.1803 62.0354"></path>
                </mask>
                <path d="M0.339545 31.1946L-1.07467 32.6088L-2.48888 31.1946L-1.07467 29.7804L0.339545 31.1946ZM31.9826 2.38003L1.75376 32.6088L-1.07467 29.7804L29.1541 -0.448393L31.9826 2.38003ZM1.75376 29.7804L32.5945 60.6212L29.7661 63.4496L-1.07467 32.6088L1.75376 29.7804Z" fill="black" mask="url(#path-1-inside-1)"></path>
            </svg>
    
    </button>
    <button class="right"  on:click={rotateRight}>

            <svg width="32" height="63" viewBox="0 0 32 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5684 0.96582L0.339545 31.1946L31.1803 62.0354"></path>
                </mask>
                <path d="M0.339545 31.1946L-1.07467 32.6088L-2.48888 31.1946L-1.07467 29.7804L0.339545 31.1946ZM31.9826 2.38003L1.75376 32.6088L-1.07467 29.7804L29.1541 -0.448393L31.9826 2.38003ZM1.75376 29.7804L32.5945 60.6212L29.7661 63.4496L-1.07467 32.6088L1.75376 29.7804Z" fill="black" mask="url(#path-1-inside-1)"></path>
            </svg>

    </button>
</div>

{/if}
<script>
    /**@type {Array<{}>}*/
    export let itemsData
    export let isMediaGallery = false
    import AuctionItem from "./auctionItems/AuctionItem.svelte";
    import {flip} from "svelte/animate"




    function rotateLeft(){
        const transition = itemsData[itemsData.length - 1]
        // @ts-ignore
        document.getElementById(transition.id).style.opacity = 0
        itemsData = 
        [itemsData[itemsData.length - 1],...itemsData.slice(0, itemsData.length -1)]
        setTimeout(()=>{
            // @ts-ignore
            document.getElementById(transition.id).style.opacity = 1
        },500)
    }
    function rotateRight(){
        const transition = itemsData[0]
        document.getElementById(transition.id).style.opacity = 0
        itemsData = [...itemsData.slice(1,itemsData.length), itemsData[0]]
        setTimeout(()=>{
            // @ts-ignore
            document.getElementById(transition.id).style.opacity = 1
        },500)
    }
    
</script>
<style lang="postcss">
    .carousell{
        width: 100%;
        position: relative;
        height: auto;
        overflow-x: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .inner-carousell{
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        height: auto;
        flex-grow: 1;
        mask: linear-gradient(
            to right, 
            transparent,
            black 10%, 
            black 70%, 
            transparent
             );
    }
    .customWidth{
 
        margin: 0 16px;
    }


    /* Hide scrollbar for Chrome, Safari, and Opera */
.hideScroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.hideScroll {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.right, .left{
    position: absolute;
    top:50%;
    transform: translateY(-50%);

}
.right{
    right: 10px;

}
.right > svg{
    transform: rotate(180deg);
}
.left{
    left: 10px;
    
}
</style>