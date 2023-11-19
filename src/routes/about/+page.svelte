<div>
    <section  class="max-w-7xl mx-auto my-0 px-1">
        <article>
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

    <div>
    <section class="outro">
        <div class="bg-overlay"></div>
        <div class="outro-img"><div>

    </section>
<div class="w-full h-full customBg">


    <article class="max-w-xl mx-auto my-0 article h-[100vh]  z-20 relative  ">

        <div class="shadow p-2">

            <p>
                At Fine Auctions, we specialize in 
                List Specialties - e.g., fine art, antiques, rare collectibles.
                Each item is handpicked and rigorously authenticated, ensuring that our clients acquire only authentic and valuable pieces.
                Our auctions are not just events; they are grand celebrations of history, art, and culture.

            </p>
            <p class="mt-4">
                <strong>Our Mission:</strong> Our mission is to connect discerning collectors with extraordinary items. 
                We believe every piece has a story, and it is our privilege to weave these narratives into the lives of our clients. 
                Whether you're a seasoned collector or new to the world of auctions, we provide a platform that is both accessible and sophisticated.
            </p>
        </div>
    </article>
</div>
    </div>
</div>
<script>
    let gsap
    import { onMount } from "svelte";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    
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

    // @ts-ignore
    ScrollTrigger.refresh()

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
        start: "top 90%",
        end:"top 10%",
        scrub:true,

    }
    })
    
    tl3.to(".outro-img",{
        "clip-path":"polygon(0% 0%,100% 0%,100% 100%,0% 100%)"
    },0).to(".outro-img",{
        scale:1.12
    },0)




    })
    function splitText(txt){
        let splittedText =
        txt.split(" ")
        .map((word, index) => `<span class=span${index} style="--index:${index}">${word}</span>`)
        .join(" ");
        return splittedText
    }
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
    background-image: url("./heroImg.png");
}
.img1{
    background-image: url("./hero3.png");
    
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
    .outro{
        height: 100vh;
        overflow: hidden;
        position: sticky;
        top: 0;
    
    }
    .outro-img{
        background-image: url("./out.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        position: absolute;
        inset: 0;
        clip-path: polygon(5% 10%,95% 10%,95% 90%,5% 90%);
        filter: grayscale(50%);
        background-blend-mode: multiply;
    }
    .bg-overlay{
  position: absolute;
  inset: 0;
  background-color: #f2f2f238;
  z-index: 20;
}
.shadow p{
    text-shadow: 0px 4px 30px #ffffff;
}
.shadow{

}
.customBg{
    background-color: #F2F2F2;
    z-index: 20;
    position: relative;
    box-shadow: -6px -45px 54px -33px rgba(0,0,0,0.31);
-webkit-box-shadow: -6px -45px 54px -33px rgba(0,0,0,0.31);
-moz-box-shadow: -6px -45px 54px -33px rgba(0,0,0,0.31);
}

.animate{
        -webkit-animation: scalingBack 45s ease-in infinite;
        animation: scalingBack 45s ease-in infinite;
        -webkit-animation-play-state: running;
        animation-play-state: running;


    }


@keyframes scalingBack{
    0% {
    transform: scale(1.1);
}
    50% {
    transform: scale(1);
}
    100% {
    transform: scale(1.1);
}
}
</style>