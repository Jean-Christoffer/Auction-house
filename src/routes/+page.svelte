{#if auctionItems}

  <section class="bg">
    <div class="bg-content">
      <div class="bg-overlay"></div>
      <div class="bg-image"></div>
    </div>
  </section>
  <div class="hero h-screen">
    <h2  class="text-4xl md:text-5xl">Welcome to Fine Auctions</h2>
    <p  class="text-2xl md:text-1xl pt-1">View all listings here</p>
    <div class="cta-container">

    
    <Cta isFilled={false} isMobile={false} linkText={"Auctions"} href="auctions" textColor="black"/>
   </div>

  </div>

    <div class="auctions-wrapper">
      
      <div class="auctions-container">
        <h3 class="py-4 pl-2 text-4xl">Auctions ending soon</h3>
        <Carousell itemsData={auctionItems}>
        </Carousell>
      </div>
    </div>


{/if}
<script>
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Cta from "$lib/components/uiComponents/Cta.svelte";
import { onMount,onDestroy } from "svelte";
import Carousell from "$lib/components/Carousell.svelte";


export let data
let auctionItems = []


$: {
  if(data){
    const {auctionItem} = data
    auctionItems = auctionItem
  }
}

let gsap

onMount(async () => {
  const module = await import ("gsap")
  gsap = module.default
  gsap.registerPlugin(ScrollTrigger) 

    // @ts-ignore
    ScrollTrigger.refresh()
    gsap.to(".bg-image",
    {
      scale:1.1,
      ease:"none",
      scrollTrigger:{
        trigger:".auctions-wrapper",
        start:"top 100%",
        end: " top 20%",
        scrub:true,
        markers:false,
        fastScrollEnd:true,
      }
    })
    onDestroy(() => {
        
        ScrollTrigger.getAll().forEach(trigger => trigger.kill()); 
    }); 
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
  overflow: hidden;
}
.bg-overlay{
  position: absolute;
  inset: 0;
  background-color: #f2f2f234;
  z-index: 20;
}
.bg-image{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
  linear-gradient(to bottom, #F2F2F2, #F2F2F2),
  url("../public/hero4.jpg");
  background-blend-mode: multiply;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}

.auctions-wrapper{
 
  background: #F2F2F2;
  z-index: 100;
  position: relative;
  transform: translate3d(0,0,0);


}
.auctions-container{
  max-width:1200px;
  margin: 0 auto;
  padding: 48px 0;
}
.hero{
  position: relative;
  padding: 0 16px;
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

}
.hero p{
  text-shadow: 0px 4px 30px #ffffff;
  font-weight: bold;
  color: black;

}
.cta-container{
  box-shadow: -9px 19px 74px 3px rgba(0,0,0,0.66),
25px 0px 20px -20px rgba(0,0,0,0.45),
0px 25px 20px -20px rgba(0,0,0,0.45),
-25px 0px 20px -20px rgba(0,0,0,0.45);
  max-width: 370px;
  margin: 16px auto 0 auto;

}


</style>