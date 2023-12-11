
<svelte:head>
    <title>About us</title>
    <meta name="description" content="Who are we?">
  </svelte:head>
  <div class="lenisWrapper">
    <section  class="max-w-7xl mx-auto my-0 px-1 child" >
        <article class="overflow-hidden">
            {#each stories as story,idx}
                <div
                class="
                grid
                grid-cols-1
                h-[60vh]
                mt-[10vh]
                grid-rows-2
                gridAreas
                md:grid-cols-2
                md:grid-rows-[auto]
                story{idx}
                "
                >
                    <div class="
                    gridAreaImg
                    z-20
                    transform translate-x-0 translate-y-0
                    {idx % 2 === 0 ? "even" : "odd"}

                    ">
                        <div class="
                        animate
                        w-full
                        block 
                        h-full
                        bg-cover 
                        bg-center 
                        bg-no-repeat
                        img{idx}
                        
                        "   />
                    </div>
                    <h2 class="text text{idx} text-4xl">
                        {story.txt}
                    </h2>
                </div>
            {/each}
        </article>
    </section>

    <div class="sticky top-0 h-[100vh] outro overflow-hidden mt-8">
        <section class="h-full overflow-hidden">
            <div class="bg-content">
                <div class="bg-overlay"></div>
                <div class="outro-img"><div>
            </div>
        </section>
    </div>
    <div class="w-full  h-[100vh] customBg article overflow-hidden">
        <article class="max-w-xl mx-auto h-full my-0  z-20 relative flex justify-center text-center items-center">

            <div class="">

                <h2 class="text-5xl md:text-7xl mission text-bold "  >
                
                        OUR MISSION
    
                </h2> 
                <p class="mt-4 text-1xl md:text-2xl" id="caption">
                    
                    Connecting discerning collectors with extraordinary items. 
                
                </p>
            </div>
        </article>
    </div>

</div>
<script lang="ts">
    import { onMount } from "svelte";

    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import SplitType from 'split-type'
    let gsap
    let stories =
     [
        {
            id:1,
            txt:"At Fine auctions",
            img:"./hero2.png"
        },
        {
            id:2,
            txt:"We pride our self with quality work",
            img:"./hero2.png"
        }   
    ]
onMount(async () => {
  const module = await import ("gsap")
  gsap = module.default



  gsap.registerPlugin(ScrollTrigger) 


  const tl = gsap.timeline({
        scrollTrigger: {
        trigger: ".story1",
        start: "top 90%",
        end:"top 20%",
        scrub:true,


    }
    })
    tl.to(".text0",{
        y:-100,
        opacity:0
    })
    tl.to(".img0",{
        opacity:0
    })

    const tl2 = gsap.timeline({
        scrollTrigger: {
        trigger: ".outro",
        start: "top 90%",
        end:"top 20%",
        scrub:true,

    }
    })
    tl2.to(".text1",{
        y:-100,
        opacity:0
    })
    tl2.to(".img1",{
        opacity:0
    })

    const tl3 = gsap.timeline({
        scrollTrigger: {
        trigger: ".article",
        start: "top 100%",
        end:"top 20%",
        scrub:true,
       
 

    }
    })
    tl3.to(".outro-img",{
       scale:1
    })

    const tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:".mission",
            start:"top 80%",
            end:"top 20%",
            scrub:true
            
        }
         })
         const splittedWord = document.querySelectorAll(".mission");

        splittedWord.forEach((char: Element, i) => {
            const htmlChar = char as HTMLElement;
            const text = new SplitType(htmlChar, { types: "chars" });

            tl4.from(text.chars, {
                opacity: 0.1,
                stagger: 0.1,
                duration: 2
            });
        })
    })

</script>
<style lang="postcss">
    
.gridAreas{
    grid-template-areas:
    "txt"
    "img";
    
}
.gridAreaImg{
    grid-area: img;
    justify-self: start;
    max-width: 300px;
    width: 100%;
    
 
}
.img0{
    background-image: url("$lib/images/heroImg.jpg");
}
.img1{
    background-image: url("$lib/images/hero3.jpg");
    
}
@media (min-width: 768px) {
    .gridAreas {
        grid-template-areas: "img txt";
      
    }

    .gridAreas:nth-of-type(odd) {
        grid-template-areas: "txt img";
    }
    .gridAreaImg{
        max-width: 800px;
        width: 100%;
    }
}
.odd{
    justify-self: start;
}
.even{
    justify-self: end;
}
.text{
    align-self: center;
    justify-self: start;
    grid-area: txt;
 
}

.text:nth-of-type(odd) {
       justify-self: center;
       max-width: 380px;
       margin-left: 16px;
    
}

    .bg-content{
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
  overflow: hidden;
}
    .outro-img{
        background-image: url("$lib/images/out.jpg");
        will-change: transform;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        inset: 0;
        overflow: hidden;
        filter: grayscale(50%);
        background-blend-mode: multiply;
        transform: scale(0.9);
    }
    .bg-overlay{
        position: absolute;
        inset: 0;
        background-color: #f2f2f238;
        z-index: 20;
        overflow: hidden;
}
.customBg{
    background-color: #F2F2F2;
    z-index: 20;
    position: relative;
    box-shadow: -6px -45px 54px -33px rgba(0,0,0,0.31);
-webkit-box-shadow: -6px -45px 54px -33px rgba(0,0,0,0.31);
-moz-box-shadow: -6px -45px 54px -33px rgba(0,0,0,0.31);
}


</style>