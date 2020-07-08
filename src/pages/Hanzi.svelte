<script>
  import { push } from "svelte-spa-router";
  import Loading from "../components/Loading.svelte";
  import HanziDrawer from "../components/HanziDrawer.svelte";

  function getHskChoices() {
    return new Promise(resolve => {
      setTimeout(() => {
        chrome.storage.sync.get(["hsk"], result => {
          if (result.hsk && result.hsk.length > 0) {
            resolve(result.hsk);
          } else {
            push("/settings");
          }
        });
      }, Math.floor(Math.random() * Math.floor(6) * 500));
    });
  }
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
  {#await getHskChoices()}
    <Loading />
  {:then hskChoices}
    <HanziDrawer hskLevels={hskChoices.map(String)} />
  {/await}
</div>
