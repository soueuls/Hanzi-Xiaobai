<script>
  export let type;
</script>

<style type="postcss">
  .success {
    @apply text-green-800 bg-green-200;
  }

  .warning {
    @apply text-orange-800 bg-orange-200;
  }

  .danger {
    @apply text-red-800 bg-red-200;
  }
</style>

<span
  class="inline-block text-xs px-2 py-1 uppercase font-bold tracking-tight
  rounded-sm {type}">
  <slot />
</span>
