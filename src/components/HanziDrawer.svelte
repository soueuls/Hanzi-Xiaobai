<script>
  import hanziData from "../assets/hanzi.json";

  export let hskLevels = [];
  let hanzi;

  function randomCharacter() {
    const matchingCharacters = hanziData.filter(line =>
      hskLevels.includes(line.hsk_levl)
    );
    hanzi =
      matchingCharacters[Math.floor(Math.random() * matchingCharacters.length)];
  }
  randomCharacter();
</script>

<h1 class="text-gray-200 text-2xl">{hanzi.charcter}</h1>
