<script>
  import Logo from "../assets/logo.png";
</script>

<style type="postcss">
  .link {
    @apply px-2 py-4;
    @apply text-indigo-100;
    transition: all 0.3s;
  }

  .link:hover {
    @apply bg-indigo-100 text-indigo-600;
  }
</style>

<header class="absolute w-full flex justify-between items-center py-4 px-8">
  <img class="w-40" src={Logo} alt="Asian girl with Chinese hat" />
  <nav>
    <ul class="flex text-lg font-bold">
      <li>
        <a class="link" href="#">📚 Resources</a>
      </li>
      <li>
        <a class="link ml-4" href="#">💌 Get in touch</a>
      </li>
      <li>
        <a class="link ml-4" href="#">👬 Our story</a>
      </li>
    </ul>
  </nav>
</header>
