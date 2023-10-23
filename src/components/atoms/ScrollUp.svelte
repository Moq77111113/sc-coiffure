<script lang="ts">
  import { onMount } from "svelte";
  let show = false;
  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function scrollSpy() {
    show = window.scrollY > 250;
  }
  onMount(() => {
    return () => {
      window.removeEventListener("scroll", scrollSpy);
    };
  });
</script>

<svelte:window on:scroll={scrollSpy} />

<button
  on:click={scrollUp}
  name="Scroll to top"
  aria-label="Scroll to top"
  class:show
  class="fixed bottom-5 right-5 grid h-10 w-10 translate-y-8 cursor-pointer place-items-center rounded-full border-none bg-secondary bg-opacity-50 p-0 text-primary opacity-0 outline-none transition-all hover:text-accent"
>
  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
    ><path
      fill="currentColor"
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    /></svg
  >
</button>

<style>
  .show {
    @apply translate-y-0 opacity-100;
  }
</style>
