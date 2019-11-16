<script>
  import Header from "../components/Header.svelte";
  import Loading from "../components/Loading.svelte";
  import HskSelector from "../components/HskSelector.svelte";
  import HanziDrawer from "../components/HanziDrawer.svelte";

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

<div class="flex w-full bg-indigo-600">
  <div class="w-full md:w-4/6 mx-auto flex justify-center items-center">
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
