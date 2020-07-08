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
  class="relative flex flex-col items-center pt-4 sm:py-2 sm:flex-row
  sm:justify-between sm:px-16">
  <a href="/" use:link>
    <img class="w-24 sm:w-32" src={Logo} alt="Asian girl with Chinese hat" />
  </a>
  <nav class="mt-4 sm:mt-0 sm:ml-6">
    <ul class="flex font-semibold text-lg">
      <li>
        <a href="/resources" class="link" use:link>📚 Resources</a>
      </li>
    </ul>
  </nav>
  <a class="absolute top-0 right-0 mt-4 mr-4" href="/settings" use:link>
    <svg
      class="w-4 text-indigo-100 fill-current"
      enable-background="new 0 0 512.002 512.002"
      version="1.1"
      viewBox="0 0 512 512"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m496.65 312.11-47.061-36.8c1.459-12.844 1.459-25.812
        0-38.656l47.104-36.821c8.827-7.109 11.186-19.575
        5.568-29.419l-48.96-84.629c-5.639-9.906-17.649-14.232-28.309-10.197l-55.467
        22.315c-10.423-7.562-21.588-14.045-33.323-19.349l-8.512-58.923c-1.535-11.312-11.24-19.72-22.656-19.627h-98.133c-11.321-0.068-20.948
        8.246-22.528 19.456l-8.533 59.093c-11.699 5.355-22.846 11.843-33.28
        19.371l-55.617-22.358c-10.55-4.159-22.549 0.115-28.096 10.005l-49.003
        84.779c-5.769 9.86-3.394 22.463 5.568 29.547l47.061 36.8c-1.473
        12.843-1.473 25.813 0 38.656l-47.104 36.8c-8.842 7.099-11.212
        19.572-5.589 29.419l48.939 84.651c5.632 9.913 17.649 14.242 28.309
        10.197l55.467-22.315c10.432 7.566 21.604 14.056 33.344 19.371l8.533
        58.88c1.502 11.282 11.147 19.694 22.528 19.648h98.133c11.342 0.091
        21-8.226 22.592-19.456l8.533-59.093c11.698-5.357 22.844-11.845
        33.28-19.371l55.68 22.379c10.55 4.149 22.543-0.122
        28.096-10.005l49.152-85.12c5.503-9.83 3.084-22.196-5.716-29.228zm-240.68
        50.56c-58.91 0-106.67-47.756-106.67-106.67s47.756-106.67 106.67-106.67
        106.67 47.756 106.67 106.67c-0.071 58.882-47.786 106.6-106.67 106.67z" />
    </svg>
  </a>
</header>
