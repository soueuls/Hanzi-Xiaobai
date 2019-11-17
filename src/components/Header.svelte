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
  class="flex flex-col items-center bg-indigo-600 py-4 sm:flex-row
  sm:justify-between sm:items-center sm:px-12">
  <a href="#/">
    <img class="w-24 sm:w-32" src={Logo} alt="Asian girl with Chinese hat" />
  </a>
  <nav class="w-full mt-4 sm:mt-0">
    <ul
      class="flex justify-around text-sm font-semibold sm:justify-end
      sm:text-base sm:font-bold">
      <li>
        <a href="/resources" class="link" use:link>📚 Resources</a>
      </li>
      <li>
        <a href="#" class="link sm:ml-4">💌 Get in touch</a>
      </li>
      <li>
        <a href="#" class="link sm:ml-4">👬 Our story</a>
      </li>
    </ul>
  </nav>
</header>
