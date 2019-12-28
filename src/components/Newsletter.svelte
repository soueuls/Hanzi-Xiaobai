<script>
  import functions from "../../config/functions";

  let name = "";
  let email = "";
  let state;
  $: disabled = !name || !email || state === "success";

  function addSubscriberToNewsletter() {
    return fetch(functions.addSubscriberToNewsletter, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then(response => {
        if (response.ok) {
          name = "";
          email = "";
          state = "success";
        } else {
          state = "error";
        }
      })
      .catch(() => {
        state = "error";
      });
  }
</script>

<style type="postcss">
  @screen sm {
    .newsletter {
      border-radius: 51% 49% 58% 42% / 34% 37% 63% 66%;
    }
  }

  button {
    transition: all 0.3s;
    @apply mt-2 px-4 py-2 font-bold text-lg;
  }

  button:hover {
    @apply shadow-xl;
  }

  button:disabled {
    @apply cursor-not-allowed;
  }

  @screen sm {
    button {
      @apply mt-0 ml-2 flex-none px-2 py-1 text-base;
    }
  }

  @screen md {
    button {
      @apply px-4 py-2 text-lg;
    }
  }
</style>

<form
  class="newsletter bg-gradient-br-indigo px-8 py-6 sm:px-24 sm:py-24"
  on:submit|preventDefault={addSubscriberToNewsletter}>
  <h2 class="text-gray-100 text-lg md:text-3xl font-bold">
    Join our newsletter
  </h2>
  <h3 class=" text-gray-300 text-sm font-hairline leading-tight">
    Get access to the best resources for Chinese learning
  </h3>
  <div class="mt-4 flex flex-col sm:flex-row">
    <input
      class="flex-auto pl-4 py-2"
      type="text"
      placeholder="First name"
      bind:value={name}
      required />
    <input
      class="mt-2 pl-4 py-2 sm:mt-0 sm:flex-auto sm:ml-2"
      type="email"
      placeholder="✉️ Email"
      bind:value={email}
      required />
    {#if state === 'success'}
      <button class="button bg-green-200 text-green-800" disabled>
        👍 Welcome on board
      </button>
    {:else if state === 'error'}
      <button class="button bg-red-200 text-red-800">
        👎 An error happened
      </button>
    {:else}
      <button
        class="button bg-indigo-100 text-indigo-900 hover:text-gray-100
        hover:bg-indigo-800 disabled:bg-indigo-100 disabled:text-gray-400"
        {disabled}>
        Start your journey
      </button>
    {/if}
  </div>
</form>
