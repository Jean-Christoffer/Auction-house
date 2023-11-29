<div>

    <div>
      <nav
        class="container relative px-6 py-5 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
            <button on:click={toggleNavbar} class="flex md:hidden">
              <div
              class="hamburger {showMenu ? 'nav-active' : 'nav-not-active'}"
              aria-controls="nav"
              aria-expanded="false"
              role="button" 
              aria-label="Toggle navigation menu"
            >
              <span class="line top"></span>
              <span class="line middle"></span>
              <span class="line bottom"></span>
            </div>
           </button>
          <a
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-gray-400"
            href="/"
            >
            <div class="hidden md:block">
              <h2>
                Fine Auctions
              </h2>
            </div>
            <div class="md:hidden sm:block ml-5">
              <svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill="#0A0B0D"/>
                <path d="M20.2285 7.84C20.1752 8.37333 20.1352 8.89333 20.1085 9.4C20.0952 9.90667 20.0885 10.2933 20.0885 10.56C20.0885 10.8667 20.0952 11.16 20.1085 11.44C20.1218 11.72 20.1352 11.96 20.1485 12.16H19.6885C19.5685 11.1867 19.4018 10.4267 19.1885 9.88C18.9885 9.32 18.6818 8.92 18.2685 8.68C17.8552 8.42667 17.2618 8.3 16.4885 8.3H15.4285C15.0018 8.3 14.6752 8.34 14.4485 8.42C14.2352 8.48667 14.0885 8.63333 14.0085 8.86C13.9285 9.07333 13.8885 9.41333 13.8885 9.88V19.84C13.8885 20.3333 13.9418 20.7067 14.0485 20.96C14.1552 21.2 14.3552 21.36 14.6485 21.44C14.9418 21.52 15.3752 21.5667 15.9485 21.58V22C15.5885 21.9733 15.1218 21.96 14.5485 21.96C13.9752 21.9467 13.3818 21.94 12.7685 21.94C12.2352 21.94 11.7218 21.9467 11.2285 21.96C10.7485 21.96 10.3418 21.9733 10.0085 22V21.6C10.4618 21.5733 10.8018 21.52 11.0285 21.44C11.2552 21.36 11.4018 21.2 11.4685 20.96C11.5485 20.72 11.5885 20.36 11.5885 19.88V9.96C11.5885 9.46667 11.5485 9.10667 11.4685 8.88C11.4018 8.64 11.2485 8.48 11.0085 8.4C10.7818 8.30667 10.4485 8.25333 10.0085 8.24V7.84C10.5285 7.85333 11.0685 7.86667 11.6285 7.88C12.2018 7.88 12.7618 7.88667 13.3085 7.9C13.8685 7.9 14.3885 7.9 14.8685 7.9C15.3485 7.9 15.7418 7.9 16.0485 7.9C16.6618 7.9 17.3552 7.9 18.1285 7.9C18.9152 7.88667 19.6152 7.86667 20.2285 7.84ZM17.1685 14.84C17.1685 14.84 17.1685 14.9067 17.1685 15.04C17.1685 15.1733 17.1685 15.24 17.1685 15.24H13.2885C13.2885 15.24 13.2885 15.1733 13.2885 15.04C13.2885 14.9067 13.2885 14.84 13.2885 14.84H17.1685ZM17.5885 12.2C17.5352 12.96 17.5085 13.54 17.5085 13.94C17.5218 14.34 17.5285 14.7067 17.5285 15.04C17.5285 15.3733 17.5352 15.74 17.5485 16.14C17.5618 16.54 17.5952 17.12 17.6485 17.88H17.1885C17.1352 17.44 17.0552 17.02 16.9485 16.62C16.8418 16.2067 16.6485 15.8733 16.3685 15.62C16.0885 15.3667 15.6685 15.24 15.1085 15.24V14.84C15.5352 14.84 15.8685 14.7533 16.1085 14.58C16.3618 14.4067 16.5552 14.18 16.6885 13.9C16.8218 13.62 16.9152 13.3333 16.9685 13.04C17.0352 12.7333 17.0885 12.4533 17.1285 12.2H17.5885Z" fill="#FFF6F6"/>
                </svg>
                
            </div>
          </a>

          <div class="md:hidden sm:block">
            <SearchButton handleSideBar= {handleActive}/>
            <Search
            searchData={searchData}
             isVisible = {isVisible }
            handleVisible={handleActive}
            handleSearch={handleSearch}
            handleInput={handleInput}
            inputValue={inputValue}/>
          </div>

        </div>
  

        <ul 
        class="{showMenu ? 'nav-active' : 'nav-not-active'}  nav"
        >
            {#each links as link}
            <li>
                {#if link.name !== "Logout"}
                  <a class="text-white md:text-gray-800 hover:text-gray-400" href="{link.href}" on:click={toggleNavbar}>{link.name}</a>
                {/if}
            </li>
            {/each}
            {#if !$page.data.user}
            <li>
              <a href="/login" class="text-white md:text-gray-400" on:click={toggleNavbar}>Login</a>
            </li>
            {/if}
        
          {#if $page.data.user}
            <li>
              <form action="/logout" method="POST">
                <button type="submit" on:click={toggleNavbar}>Log out</button>
              </form>
            </li>  
          {/if}
        </ul>

        <div class="md:block hidden">
            <SearchButton handleSideBar= {handleActive}/>
            <Search
            searchData={searchData}
             isVisible = {isVisible }
            handleVisible={handleActive}
            handleSearch={handleSearch}
            handleInput={handleInput}
            inputValue={inputValue}
            />
   
          </div>
      </nav>
      <div class="overlay {showMenu ? 'nav-active' : 'nav-not-active'}" on:click={toggleNavbar}></div>
    </div>
    
  </div>



<script>
    import Search from "./Search.svelte";
    import SearchButton from "./searchComponents/SearchButton.svelte";
    import { page } from '$app/stores'

    //exports
    /**
     *  @type {onsubmit}
     */
    export let handleSearch
	/**
	 * @type {oninput}
	 */
   export let handleInput
	/**
	 * @type {string}
	 */
  
	export let inputValue
      /**
	 * @type {Array<{}>}
	 */
   export let searchData
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
            href:"/auctions"
        },

         {
            name:"Profile",
            href:"/profile"
        },
        {
            name:"About",
            href:"/about"
        },


    ]
    
</script>
<style lang="postcss">

  .desktopnav{
    display: flex;
    color: black;
  }
  .nav{
    display: flex;

  }
  @media (max-width: 52rem) {
    header {
        justify-content: space-between;
        box-shadow: 0px 2px 2px black;
        z-index: 100;
    }
    .nav {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        flex-direction: column;
        padding: min(30vh, 2rem);
        gap: 2rem;
        transform: translateY(-100%);
        transition: 0.4s ease-in-out;
        text-align: left;
        justify-content: center;
        align-items: center;
        z-index: 200;
        background-color: #202020;
    }
    /*Hamburger Menu*/

    .line {
        width: 23px;
        height: 3px;
        background: #202020;
        display: block;
        margin: 5px 0;
        position: relative;
    }
    .hamburger {
        background: transparent;
        border: none;
        z-index: 300;
    }
    /*Hamburger menu Animation*/

    .hamburger .line {
        transition: 0.6s, opacity 0.2s;
        transform-origin: center;
    }
    .hamburger.nav-active .top {
        transform: rotate(45deg) translate(8px, 7px);
    }
    .hamburger.nav-active .bottom {
        transform: rotate(-45deg) translate(4px, -3.5px);
    }
    .hamburger.nav-active .middle {
        opacity: 0;
    }
    .hamburger.nav-active .line {
        background: white;
    }
    .nav.nav-active {
        transform: translateY(0%);
    }
}
/*Navigation Desktop*/

@media (min-width: 52rem) {
    .hamburger {
        display: none;
    }
    header {
        justify-content: space-around;
    }

    .nav {
        gap: clamp(1rem, 4vw, 2rem);
        padding-inline: clamp(2.5rem, 6vw, 9rem);
    }
    .nav a:hover,
    .active-page {
        transition: 0.5s ease;
        text-underline-offset: 0.4rem;
        text-decoration: underlin white;
    }
}


.overlay {
    background: black;
    opacity: 0.6;
    position: fixed;
    display: none;
    transition: 0.3s ease;
    z-index: 0;
}
.overlay.nav-active {
    display: block;
    pointer-events: all;
    transition-delay: 0s;
    cursor: pointer;
    height: 100%;
    width: 100%;
    z-index: 1;
}
@media(min-width:768px){
  .overlay{
    display: none;
  }
  .overlay.nav-active{
    display: none;
  }
}
</style>