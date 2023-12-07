<section class="image-gallery ">
    <div class="image-gallery-wrapper relative">
        <ul class="image-gallery-ul hideScroll" bind:this={scrollContainer} on:scroll={checkScrollPosition}>
            {#each data as image, idx}
            <li class="shrink-0 w-full flex justify-center" style="background-image: url({image});" bind:clientWidth={width}>
                <img class="img max-h-full max-w-full w-full object-contain object-center" src={image} alt="" id="image{idx}"/>
            </li>
            {/each}
        </ul>
        {#if data.length > 1}
        <div class=" absolute flex justify-center bottom-1 left-0 right-0 mx-10 text-center">
                <div class="image-count">
                    <p class="text-white">
                        <small>
                            <em>({currentCount}/{data.length})</em>
                        </small>
             
                    </p>
                </div>
        </div>
      
        <div class="left-container">
            <button class="btn-left btn" on:click={handleLeft}  disabled={disableLeftButton} aria-label="Left-navigation" >
                <svg width="24" height="24" fill="none" class="blockify lightbox-arrow-icon inline" xmlns="http://www.w3.org/2000/svg"><path d="M15 19.5 7.5 12 15 4.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span class="aria">Navigate left</span>
            </button>
        </div>
        <div class="right-container">
            <button class="btn-right btn"  on:click={handleRight}  disabled={disableRightButton} aria-label="Right-navigation" >
                <svg width="24" height="24" fill="none" class="blockify lightbox-arrow-icon inline" xmlns="http://www.w3.org/2000/svg"><path d="m9 4.5 7.5 7.5L9 19.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                <span class="aria">Navigate right</span>
            </button>
        </div>
        {/if}
    </div>
</section>
<script lang="ts">

    export let data:string[]
    import {onMount} from "svelte"
    let scrollContainer:HTMLElement
    let width = 0 
    let currentCount = 1
    const tolerance = 10;
    let disableLeftButton = true;
    let disableRightButton = false;

    function handleLeft(){
        scrollContainer.scrollLeft -= width
        currentCount --
    }
    function handleRight(){
        scrollContainer.scrollLeft += width
        currentCount ++
    }
    function checkScrollPosition() {
    const isAtStart = scrollContainer.scrollLeft === 0;
    const isAtEnd = Math.abs((scrollContainer.scrollLeft + scrollContainer.clientWidth) - scrollContainer.scrollWidth) <= tolerance;
   console.log(scrollContainer.scrollWidth , Math.round(scrollContainer.scrollLeft + scrollContainer.clientWidth) )
    disableLeftButton = isAtStart;
    disableRightButton = isAtEnd;
  }
onMount(()=>{checkScrollPosition()})
</script>
<style lang="postcss">
.image-gallery-wrapper{
    max-height: 1000px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 8px;
    overflow: hidden;
    will-change: transform;
}
.image-gallery-ul{
    aspect-ratio: 4 / 3;
    overflow-x: auto;
    overflow-y: hidden;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    width: 100%;
    display: flex;
    list-style: none;
}
.image-gallery-ul li {
    scroll-snap-align: start;

    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.img{
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background-color: #ffffffb3
}
.image-count{
    background-color: #202020b4;
    padding: 2px 2px;
    width: 50px;
    border-radius: 4px;
}
.btn{
    background: rgba(45,45,45,.6);
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 0;
    border: 0;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
    outline: none;
    color: #fff;
}
.btn:disabled{
    background: rgba(45, 45, 45, 0.096);
    cursor: default;
}
.btn:hover{
    background: rgba(45, 45, 45, 0.747);
}
.btn:disabled:hover{
    background: rgba(45, 45, 45, 0.096);
    cursor: default;
}
.left-container{
    position: absolute;
    z-index: 2;
    top: calc(50% - 65px);
    padding: 50px 5px;
}
.right-container{
    position: absolute;
    z-index: 2;
    top: calc(50% - 65px);
    padding: 50px 5px;
    right: 15px;
}

.hideScroll::-webkit-scrollbar {
    display: none;
}

.aria{
    position:absolute;
    left:-100;
    visibility: hidden
}
.hideScroll {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}
</style>