<script>
  import { onMount } from "svelte";
  import HanziWriter from "hanzi-writer";
  import Badge from "./Badge.svelte";
  import hanziData from "../assets/hanzi.json";

  export let hskLevels = [];
  let writer;

  onMount(() => {
    writer = HanziWriter.create("hanzi", hanzi.charcter, {
      width: 200,
      height: 300,
      padding: 15,
      strokeColor: "#4C51BF",
      radicalColor: "#9AE6B4"
    });

    setTimeout(() => writer.loopCharacterAnimation(), 2000);
  });

  function startQuiz() {
    writer.quiz();
  }

  function randomCharacter() {
    const matchingCharacters = hanziData.filter(line =>
      hskLevels.includes(line.hsk_levl)
    );
    return matchingCharacters[
      Math.floor(Math.random() * matchingCharacters.length)
    ];
  }

  const hanzi = randomCharacter();
</script>

<div class="w-full flex justify-around">
  <div class="flex flex-col items-center">
    <div
      id="hanzi"
      class="relative overflow-hidden bg-indigo-100 rounded shadow-2xl">
      <div class="absolute top-0 right-0">
        {#if hanzi.stroke_count <= 7}
          <Badge type="success">easy</Badge>
        {:else if hanzi.stroke_count <= 11}
          <Badge type="warning">medium</Badge>
        {:else}
          <Badge type="danger">hard</Badge>
        {/if}
      </div>
    </div>
    <button
      on:click={startQuiz}
      class="px-4 py-2 bg-green-500 text-green-100 rounded-sm shadow-md mt-2
      hover:bg-green-400 hover:shadow-xl active:shadow-none focus:outline-none
      focus:shadow-outline">
      Quizz
    </button>
  </div>
  <div class="flex flex-col items-center">
    <h1 class="font-semi-bold text-indigo-100 text-2xl">{hanzi.pinyin}</h1>
    <h2 class="font-hairline italic text-indigo-200">{hanzi.definition}</h2>
  </div>
</div>
