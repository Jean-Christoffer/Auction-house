<nav class="flex items-center p-5">
    <div >
       <h2 class="bold">Jeans</h2>
       <h3>Auction</h3>
    </div>
    <ul class="flex text-black  gap-5 ml-10">
        {#each links as link}
            <li>
                <a href="{link.href}">{link.name}</a>
            </li>
        {/each}
    </ul>
    <div class="ml-auto">
        <SearchButton handleSideBar= {handleActive}/>
        <Search isVisible = {isVisible } handleVisible={handleActive}/>
    </div>
</nav>

<script>
    import Search from "./Search.svelte";
    import SearchButton from "./uiComponents/SearchButton.svelte";

    let isVisible = false
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
            href:"./"
        }
        
    ]
</script>