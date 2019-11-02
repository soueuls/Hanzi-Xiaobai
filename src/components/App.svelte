<script>
  import HskSelector from "./HskSelector.svelte";

  let hskChoices = [];

  function changeHskSettings({ detail: choices }) {
    // save choices in chrome.storage
    hskChoices = [...choices];
  }
</script>

<div class="h-screen bg-indigo-600">
  <div class="w-full md:w-4/6 h-full mx-auto flex justify-center items-center">
    {#if hskChoices.length > 0}
      <p>Je dois afficher un nouveau mot.</p>
    {:else}
      <HskSelector choices={hskChoices} on:choice={changeHskSettings} />
    {/if}
  </div>
</div>
