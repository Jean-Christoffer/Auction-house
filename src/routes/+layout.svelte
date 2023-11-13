<script>
    import "../app.css";
    import Navigation from "$lib/components/Navigation.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>
<div class="min-h-screen flex-col flex">
  <header>
      <Navigation/>
  </header>
  <main>
    <slot />
  </main>
  <footer class="mt-auto">
    <Footer/>
  </footer>
</div>

