<div>
  <section class="bg">
    <div class="bg-content">
      <div class="bg-image"></div>
    </div>
  </section>
  <div class="hero h-screen">
    <h2 >Welcome to Fine Auctions</h2>
    <p>View all listings here</p>
    <div class="cta-container">

    
    <Cta isFilled={false} isMobile={false} linkText={"Auctions"} href="auctions"/>
   </div>
  </div>
    <div class="auctions-wrapper">
      <div class="auctions-content">
        <h2 class="text-4xl pt-6 mb-4">Latest auctions</h2>
        <div id="slider" class="flex overflow-x-auto scrolling-touch  snap-mandatory hideScroll">
          {#if listings.length > 0}
            {#each listings.slice(0,7) as latest }
            <div class="slider-item  mr-3 h-full flex-shrink-0 customWidth">
              <AuctionItem listingData={latest} />
            </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>

</div>
<script>
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AuctionItem from "$lib/components/uiComponents/AuctionItem.svelte";
import Cta from "$lib/components/uiComponents/Cta.svelte";
import { onMount } from "svelte";
export let data
let listings 
$: {
  if(data){
    listings = data.props.data.filter(i => i.media.length > 0).sort((a,b) => a.created - b.created)

  }
}

let gsap

onMount(async () => {
  const module = await import ("gsap")
  gsap = module.default
  gsap.registerPlugin(ScrollTrigger) 

    // @ts-ignore
    ScrollTrigger.refresh()
    gsap.to(".bg-content",
    {
      scale:1.14,
      ease:"none",
      scrollTrigger:{
        trigger:".auctions-wrapper",
        start:"top bottom",
        end: "bottom top",
        scrub:true,
        markers:false,
        fastScrollEnd:true,
      }
    })

    })
    
    </script>
<style lang="postcss">
.bg{
  position: sticky;
  top: 0;
  width: 100%;
  overflow: hidden;
  transform: translate3d(0,0,0);
  height: 100vh;
  pointer-events: none;
  z-index: 0;
}
.bg-content{
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
}
.bg-image{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../lib/images/hero00.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}
.auctions-content{
  height: 100%;
  background: white;
  max-width: 767px;
  padding: 0 10px;
  z-index: 100;
  margin:  auto;
  position: relative;
  transform: translate3d(0,0,0)
}
.auctions-wrapper{
  height: 100vh;
  background: white;
  z-index: 100;
  position: relative;
  transform: translate3d(0,0,0)
}
.hero{
  position: relative;

  z-index: 200;
  transform: translate3d(0,0,0);
  text-align: center;


  max-width: 670px;
  margin: -70vh auto 0 auto;
}
.hero h2{
  text-shadow: 0px 4px 30px #ffffff;
  font-weight: bold;
  color: black;
  font-size: 50px;
}
.hero p{
  text-shadow: 0px 4px 30px #f8f5f5;
  font-weight: bold;
  color: black;
  font-size: 24px;
}
.cta-container{
  max-width: 370px;
  margin: 16px auto 0 auto;
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
.customWidth{
  max-width: 260px;
height: 450px;
}
</style>