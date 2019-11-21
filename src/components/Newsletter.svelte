<style type="postcss">
  @screen sm {
    .newsletter {
      border-radius: 51% 49% 58% 42% / 34% 37% 63% 66%;
    }
  }

  button {
    transition: all 0.3s;
  }

  button:hover {
    @apply text-gray-100 bg-indigo-800;
    @apply shadow-xl;
  }
</style>

<form class="newsletter bg-indigo-600 px-8 py-6 sm:px-24 sm:py-24">
  <h2 class="text-gray-100 text-lg md:text-3xl font-bold">
    Join our newsletter
  </h2>
  <h3 class=" text-gray-300 text-sm font-hairline leading-tight">
    Get access to the best resources for Chinese learning
  </h3>
  <div class="mt-4 flex flex-col sm:flex-row">
    <input
      class="flex-auto pl-4 py-2"
      type="text"
      placeholder="First name"
      required />
    <input
      class="mt-2 pl-4 py-2 sm:mt-0 sm:flex-auto sm:ml-2"
      type="email"
      placeholder="✉️ Email"
      required />
    <button
      class="mt-2 sm:mt-0 sm:ml-2 sm:flex-none px-4 py-2 sm:px-2 sm:py-1 md:px-4
      md:py-2 font-bold text-lg sm:text-base md:text-lg bg-indigo-100
      text-indigo-900">
      Start your journey
    </button>
  </div>
</form>
