<script>
  import { createEventDispatcher } from "svelte";
  import { fade, fly } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let choices = [];
  $: valid = choices.length > 0;

  function submit() {
    if (choices.length > 0) {
      dispatch("choice", choices);
    }
  }
</script>

<style type="type/postcss">
  input[type="checkbox"] {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  input:checked + label {
    @apply bg-green-400;
  }

  input:focus + label,
  label:active {
    @apply border-solid border-4 border-green-600;
  }

  .box {
    @apply px-8 py-6 m-2;
    @apply bg-gray-800 text-white font-bold text-2xl;
    @apply rounded shadow-md border-4 border-transparent;
    @apply cursor-pointer;
    transition: background 0.5s;
  }

  .button {
    @apply mt-4 px-4 py-2;
    @apply bg-green-500 text-white text-xl;
    @apply rounded border-4 border-transparent;
    transition: transform 0.3s;
  }

  .button:hover,
  .button:focus {
    @apply shadow-lg outline-none;
    transform: translateY(-0.3rem);
  }

  .button:active {
    @apply shadow-none;
    transform: translateY(0);
  }
</style>

<div class="h-48 flex flex-col items-center">
  <h1 class="text-gray-200 font-bold uppercase text-2xl antialiased">
    Which HSK level do you want to practice?
  </h1>
  <div class="w-full flex justify-around">
    {#each [...Array(6).keys()].slice(1) as value, i}
      <input id="hsk-{value}" type="checkbox" bind:group={choices} {value} />
      <label
        in:fly={{ x: -200, delay: 150 * i, duration: 500 }}
        for="hsk-{value}"
        class="box">
        {value}
      </label>
    {/each}
  </div>
  {#if valid}
    <button transition:fly|local={{ y: 100 }} class="button" on:click={submit}>
      Let's start!
    </button>
  {/if}
</div>
