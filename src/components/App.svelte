<script>
  import Header from "./Header.svelte";
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
      setTimeout(() => {
        chrome.storage.sync.get(["hsk"], result => {
          resolve(
            hskChoices && hskChoices.length ? hskChoices : result.hsk || []
          );
        });
      }, Math.floor(Math.random() * Math.floor(6) * 500));
    });
  }
</script>

<div class="flex flex-col h-screen bg-indigo-600">
  <Header />
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
