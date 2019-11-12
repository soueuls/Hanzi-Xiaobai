<script>
  import Loading from "./Loading.svelte";
  import HskSelector from "./HskSelector.svelte";
  import HanziDrawer from "./HanziDrawer.svelte";

  let hskChoices;
  let promise = getHskChoices();

  function changeHskSettings({ detail: choices }) {
    chrome.storage.sync.set({ hsk: choices }, () => {
      hskChoices = [...choices];
      promise = getHskChoices();
    });
  }

  function getHskChoices() {
    return new Promise(resolve => {
      if (hskChoices && hskChoices.length) {
        resolve(hskChoices);
      }

      setTimeout(() => {
        chrome.storage.sync.get(["hsk"], result => {
          hskChoices = result.hsk || [];
          resolve(hskChoices);
        });
      }, 2000);
    });
  }
</script>

<div class="h-screen bg-indigo-600">
  <div class="w-full md:w-4/6 h-full mx-auto flex justify-center items-center">
    {#await promise}
      <Loading />
    {:then choices}
      {#if choices.length}
        <HanziDrawer hskLevels={choices.map(String)} />
      {:else}
        <HskSelector choices={hskChoices} on:choice={changeHskSettings} />
      {/if}
    {/await}
  </div>
</div>
