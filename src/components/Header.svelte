<script>
  import { link } from "svelte-spa-router";
  import Logo from "../assets/logo.png";
</script>

<style type="postcss">
  .link {
    @apply block;
    @apply px-2 py-4;
    @apply text-indigo-100;
    transition: all 0.3s;
  }

  .link:hover {
    @apply bg-indigo-100 text-indigo-600;
  }
</style>

<header
  class="flex flex-none justify-between items-start bg-indigo-600 py-4 px-8">
  <a href="#/">
    <img class="w-40" src={Logo} alt="Asian girl with Chinese hat" />
  </a>
  <nav>
    <ul class="flex flex-col items-end md:flex-row text-lg font-bold">
      <li>
        <a href="#" class="link">📚 Resources</a>
      </li>
      <li>
        <a href="#" class="link md:ml-4">💌 Get in touch</a>
      </li>
      <li>
        <a href="#" class="link md:ml-4">👬 Our story</a>
      </li>
    </ul>
  </nav>
</header>
