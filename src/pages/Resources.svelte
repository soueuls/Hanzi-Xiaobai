<script>
  import BooksData from "../assets/books";
  import AppsData from "../assets/apps";
  import PodcastsData from "../assets/podcasts";
  import TutorsData from "../assets/tutors";

  import Book from "../components/Book.svelte";
  import MobileApp from "../components/MobileApp.svelte";
  import Podcast from "../components/Podcast.svelte";
  import Tutor from "../components/Tutor.svelte";
</script>

<div class="bg-gray-100">
  <section class="px-6 py-12 md:px-12 lg:px-24">
    <h2 class="font-serif text-center text-indigo-800 text-3xl font-bold">
      📚 Books
    </h2>
    <div class="books">
      {#each BooksData as book}
        <div class="mt-16">
          <Book {...book} />
        </div>
      {/each}
    </div>
  </section>
  <section class="bg-gradient-br-indigo px-6 py-12 md:px-12 lg:px-24">
    <h2 class="font-serif text-center text-indigo-100 text-3xl font-bold">
      📱 Apps
    </h2>
    <div
      class="flex flex-col items-center md:flex-row md:flex-wrap
      md:justify-between md:items-start">
      {#each AppsData as app}
        <div class="flex-none mt-20 w-8/12 md:w-1/3">
          <MobileApp {...app} />
        </div>
      {/each}
    </div>

    <h2 class="mt-20 font-serif text-center text-indigo-100 text-3xl font-bold">
      🎧 Podcasts
    </h2>
    <div
      class="flex flex-col items-center md:flex-row md:flex-wrap
      md:justify-between md:items-start">
      {#each PodcastsData as podcast}
        <div class="flex-none mt-10 w-8/12 md:w-1/3">
          <Podcast {...podcast} />
        </div>
      {/each}
    </div>
  </section>
  <section class="px-6 py-12 md:px-12 lg:px-24">
    <h2 class="font-serif text-center text-indigo-800 text-3xl font-bold">
      🎓 Tutoring
    </h2>
    <h3
      class="mt-1 text-center font-light text-sm text-gray-600 uppercase
      leading-snug tracking-wide">
      Hire the best teachers to practice your pronounciation and quickly correct
      your mistakes.
    </h3>
    <div
      class="flex flex-col items-center sm:flex-row sm:flex-wrap
      sm:justify-between sm:items-start">
      {#each TutorsData as tutor}
        <div class="flex-none mt-20 w-8/12 sm:w-1/2 md:w-1/3">
          <Tutor {...tutor} />
        </div>
      {/each}
    </div>
  </section>
</div>
