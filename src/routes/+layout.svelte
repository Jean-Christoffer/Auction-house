<script>
    import "../app.css";
    import Navigation from "$lib/components/Navigation.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Lenis from '@studio-freight/lenis'
    import { onMount } from "svelte";



    onMount(()=>{
    
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
    let inputValue = ""
    /**
	 * @type {Array<{}>}
	 */
    let searchData
    
    // @ts-ignore
    async function getSearchResults(value){
      const apiUrl = `https://api.noroff.dev/api/v1/auction/listings?_tag=${value}&_active=tru`;
      try{
        const response = await  fetch(apiUrl)
        const data = await response.json()
        searchData = data
   
      }


      catch(error){
        console.log(error)
      }

    }

    function handleSearch(e) {
        e.preventDefault()
        if(inputValue){
          getSearchResults(inputValue)
        }
    }

    function handleInput(e){
      inputValue = e.target.value
  }

</script>


<div class="min-h-screen flex-col flex">
  <header>
      <Navigation
       searchData={searchData}
       handleSearch={handleSearch}
       handleInput={handleInput} 
       inputValue={inputValue}/>
  </header>

  <main>
    <slot />
  </main>
  <footer class="mt-auto">
    <Footer/>
  </footer>
</div>
<style lang="postcss">
header{
  position: sticky;
  top: 0;
  z-index: 2000;
  background-color: #F2F2F2;
}
</style>
