

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

<script lang="ts">




  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let inputValue = ""

  let searchData:AuctionItemTypes[]
  
 
  async function getSearchResults(value:string){
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

 
  function handleSearch(event: { preventDefault: () => void; }) {
    event.preventDefault()
      if(inputValue){
        getSearchResults(inputValue)
      }
  }



  function handleInput(e: Event): void {
    const target = e.target as HTMLInputElement;
    inputValue = target.value;
}

</script>

<style lang="postcss">
header{
  position: sticky;
  top: 0;
  z-index: 2000;
  background-color: #F2F2F2;
}

.custom-container-scroll{
      

      max-height: 200px;
      width: 100%;
      overflow: auto;
      padding: 10px 10px;
      scroll-behavior: smooth;
}
.custom-container-scroll::-webkit-scrollbar {
      width: 12px;
  }
  
  .custom-container-scroll::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: #e7e7e7;
      border: 1px solid #cacaca;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  }
  
  .custom-container-scroll::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #363636;
  }
</style>
