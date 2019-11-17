<script>
  import Book from "../components/Book.svelte";
  import BooksData from "../assets/books/data";

  const hanzi = BooksData[0];
</script>

<div class="w-full py-20 bg-gray-100">
  <div class="flex flex-col container mx-auto px-6 md:px-12 lg:px-24">
    <h1 class="font-serif text-center text-indigo-800 text-3xl font-bold">
      📚 Books
    </h1>
    <div class="books">
      {#each BooksData as book}
        <div class="mt-16 first:mt-8">
          <Book {...book} />
        </div>
      {/each}
    </div>
  </div>
</div>
