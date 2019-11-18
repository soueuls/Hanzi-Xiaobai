<script>
  export let name;
  export let image;
  export let email;
  export let description;
</script>

<style type="postcss">
  .tutor img {
    filter: blur(1px) grayscale(70%);
    transition: all 0.3s;
  }

  .tutor:hover img {
    filter: blur(0) grayscale(0);
  }
</style>

<div class="tutor flex flex-col items-center px-4">
  <div class="relative">
    <img
      class="w-32 h-32 object-cover object-top rounded-full"
      src={image}
      alt="Professional image of {name}" />
    <a
      class="absolute bottom-0 inset-x-auto px-2 py-1 bg-indigo-700
      text-indigo-100 rounded-lg shadow-lg text-xs"
      href="mailto:{email}">
      Book a session
    </a>
  </div>
  <h2
    class="mt-2 uppercase font-semibold tracking-wide text-base text-indigo-800">
    {name}
  </h2>
  <p class="mt-2 text-sm text-justify text-gray-800 leading-loose">
    {@html description}
  </p>
</div>
