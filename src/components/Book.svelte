<script>
  export let title;
  export let subtitle;
  export let description;
  export let image;
</script>

<style type="postcss">
  .book img {
    transition: all 0.3s;
  }

  .book:hover img {
    transform: translateY(-1rem) scale(1.1);
    @apply shadow-2xl;
  }
</style>

<a class="book" href="#">
  <div class="flex justify-between items-start">
    <img
      class="w-32 h-48 sm:w-48 sm:h-64 object-cover shadow-lg rounded"
      src={image}
      alt="Cover of {title}" />
    <div class="w-3/5 flex flex-col">
      <h2 class="font-bold text-xl leading-tight text-indigo-800">{title}</h2>
      {#if subtitle}
        <h3
          class="mt-1 font-light text-xs text-gray-500 uppercase leading-snug
          tracking-wide">
          {subtitle}
        </h3>
      {/if}
      <p
        class="mt-2 text-base sm:text-sm text-justify text-gray-700 leading-snug
        sm:leading-loose">
        {@html description}
      </p>
    </div>
  </div>
</a>
