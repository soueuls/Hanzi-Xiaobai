<script>
  import { pop } from "svelte-spa-router";
  import HskSelector from "../components/HskSelector.svelte";

  function changeHskSettings({ detail: choices }) {
    chrome.storage.sync.set({ hsk: choices }, () => {
      pop();
    });
  }

  function getHskChoices() {
    return new Promise(resolve => {
      chrome.storage.sync.get(["hsk"], result => {
        resolve(result.hsk || []);
      });
    });
  }
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
  {#await getHskChoices() then choices}
    <HskSelector on:submit={changeHskSettings} {choices} />
  {/await}
</div>
