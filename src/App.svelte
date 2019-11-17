<script>
  import Router from "svelte-spa-router";

  import Header from "./components/Header.svelte";
  import Hanzi from "./pages/Hanzi.svelte";
  import Resources from "./pages/Resources.svelte";

  const routes = {
    "/resources": Resources,
    "*": Hanzi
  };
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <div class="flex flex-1">
    <Router {routes} />
  </div>
</div>
