<script>
  export let icon;
  export let image;
  export let name;
  export let plan;
  export let description;
</script>

<style type="postcss">
  .app > img {
    transition: all 0.3s;
  }

  .app:hover > img {
    transform: scale(1.1);
  }

  .app:hover > .icon {
    transform: translateY(-1.5rem);
    filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.5));
  }
</style>

<div class="app relative flex flex-col items-center px-6">
  <img
    class="icon w-16 object-cover rounded-full absolute z-10 -mt-8"
    src={icon}
    alt="Icon of {name}" />
  <img
    class="w-64 object-cover rounded shadow-md"
    src={image}
    alt="Screenshot of {name}" />
  <div class="mt-3 flex justify-center items-center">
    <h2 class="font-normal text-center text-xl leading-tight text-indigo-100">
      {name}
    </h2>
    <div
      class="ml-3 px-2 text-xs uppercase tracking-wide font-bold bg-indigo-200
      text-indigo-800 rounded-lg shadow-none">
      {plan}
    </div>
  </div>
  <p class="mt-1 text-justify md:text-center text-indigo-200">{description}</p>
</div>
