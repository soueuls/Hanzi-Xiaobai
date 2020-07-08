<script>
  import Router from "svelte-spa-router";

  import Header from "./components/Header.svelte";
  import Hanzi from "./pages/Hanzi.svelte";
  import Resources from "./pages/Resources.svelte";
  import Settings from "./pages/Settings.svelte";

  const routes = {
    "/resources": Resources,
    "/settings": Settings,
    "*": Hanzi
  };
</script>

<div class="flex flex-col min-h-screen bg-gradient-r-indigo">
  <Header />
  <main class="flex-1 flex">
    <Router {routes} />
  </main>
</div>
