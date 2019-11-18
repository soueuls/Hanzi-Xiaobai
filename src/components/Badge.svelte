<script>
  export let type;
</script>

<style type="postcss">
  .success {
    @apply text-green-100 bg-green-500;
  }

  .warning {
    @apply text-orange-100 bg-orange-500;
  }

  .danger {
    @apply text-red-100 bg-red-500;
  }
</style>

<span
  class="inline-block text-xs px-2 py-1 uppercase font-semibold tracking-wide {type}">
  <slot />
</span>
