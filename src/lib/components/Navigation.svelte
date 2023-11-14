<div>
    <div>
      <nav
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
            <button on:click={toggleNavbar} class="flex md:hidden">
                <div class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
           </button>
          <a
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-400"
            href="/"
            >Jean
          </a>

          <div class="md:hidden sm:block">
            <SearchButton handleSideBar= {handleActive}/>
            <Search isVisible = {isVisible } handleVisible={handleActive}/>
   
          </div>

        </div>
  

        <ul
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
            {#each links as link}
            <li>
                <a class="text-gray-800 hover:text-gray-400" href="{link.href}">{link.name}</a>
            </li>
            {/each}
        </ul>
        <div class="md:block hidden">
            <SearchButton handleSideBar= {handleActive}/>
            <Search isVisible = {isVisible } handleVisible={handleActive}/>
   
          </div>
      </nav>
    </div>
    
  </div>



<script>
    import Search from "./Search.svelte";
    import SearchButton from "./uiComponents/SearchButton.svelte";

    let isVisible = false
    let showMenu = false;

    function toggleNavbar() {
    showMenu = !showMenu;
    }
    function handleActive(){
        isVisible = !isVisible
        
    }

    const links = 
    [
        {
            name:"Auctions",
            href:"auctions"
        },
        {
            name:"Buying & Selling",
            href:"buyingSelling"
        },
        {
            name:"About",
            href:"about"
        },
        {
            name:"Login",
            href:"/"
        },

         {
            name:"Profile",
            href:"profile"
        }
    ]
</script>