<script>
  import { onMount } from "svelte";
  import HanziWriter from "hanzi-writer";
  import Badge from "./Badge.svelte";
  import hanziData from "../assets/hanzi.json";

  export let hskLevels = [];
  let writer;

  onMount(() => {
    writer = HanziWriter.create("hanzi", hanzi.character, {
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

  function playSound(mp3Code) {
    const audio = new Audio(
      `https://raw.githubusercontent.com/soueuls/Hanzi-Xiaobai/master/src/assets/sounds/${mp3Code}.mp3`
    );
    audio.play();
  }

  const hanzi = randomCharacter();
</script>

<div
  class="py-12 flex flex-col items-center md:flex-row md:justify-center
  md:space-x-8 md:items-start">
  <div class="flex-none flex flex-col items-center">
    <div
      id="hanzi"
      class="relative overflow-hidden bg-indigo-100 rounded shadow-2xl">
      {#if hanzi.audio}
        <div class="absolute top-0 left-0 mt-3 ml-3">
          <button type="button" on:click={() => playSound(hanzi.audio)}>
            <svg
              class="w-6 h-6 fill-current text-indigo-600"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="m421 255h-30c0 74.439-60.561 135-135
                  135s-135-60.561-135-135h-30c0 85.925 66.023 156.707 150
                  164.311v62.689h-105v30h240v-30h-105v-62.689c83.977-7.604
                  150-78.386 150-164.311z" />
                <path
                  d="m256 360c57.897 0 105-47.103
                  105-105v-150c0-57.897-47.103-105-105-105s-105 47.103-105
                  105v150c0 57.897 47.103 105 105 105zm0-330c36.219 0 66.522
                  25.808 73.491
                  60h-43.491v30h45v45h-45v30h45v45h-45v30h43.491c-6.968
                  34.192-37.272 60-73.491
                  60s-66.522-25.808-73.491-60h43.491v-30h-45v-45h45v-30h-45v-45h45v-30h-43.491c6.969-34.192
                  37.272-60 73.491-60z" />
              </g>
            </svg>
          </button>
        </div>
      {/if}
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
  <div class="w-2/5 flex flex-col text-indigo-200">
    <div class="mt-6 md:mt-0 text-center">
      <h1 class="font-semi-bold text-indigo-100 text-2xl">{hanzi.pinyin}</h1>
      <h2 class="font-hairline italic">{hanzi.definition}</h2>
    </div>
    {#each hanzi.sentences as sentence}
      <div class="mt-4 text-center md:text-left">
        <p>
          {@html sentence[0].replace(hanzi.character, `<span class="text-lg text-green-600 font-bold">${hanzi.character}</span>`)}
        </p>
        <p>{sentence[1]}</p>
      </div>
    {/each}
  </div>
</div>
