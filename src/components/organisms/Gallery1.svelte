<script lang="ts">
  import Modal from "~/components/molecules/Modal.svelte";
  import Carousel from "~/components/molecules/Carousel.svelte";
  import Link from "~/components/atoms/Link1.svelte";
  import type { Posts } from "~/types/instagram/post";
  export let posts: Posts;

  let carouselPosts = [...posts];
  let showModal = false;

  let toggle = (post: Posts[number]) => {
    if (showModal === false) {
      const index = posts.findIndex((_) => _.id === post.id);
      carouselPosts = posts.slice(index).concat(posts.slice(0, index));
    }
    setTimeout(() => (showModal = !showModal), 150);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      showModal = false;
    }
  };
</script>

<svelte:window on:keydown={handleKeyDown} />
<section id="pics" class="my-8 flex flex-col gap-4 items-center">
  <h2 class="text-default text-2xl">Explorer nos travaux</h2>
  <article class="grid grid-cols-2 gap-2 bg-secondary sm:grid-cols-4">
    {#each posts as post (post.id)}
      <button
        aria-label="Ouvrir l'image"
        class="relative"
        on:click={() => toggle(post)}
      >
        <img
          src={post.media_url}
          alt={post.caption}
          loading="eager"
          width="160"
          height="160"
          class=" h-full w-full cursor-pointer border border-white object-cover"
        />

        <Link
          href={post.permalink}
          newTab={true}
          title={"Ouvrir dans instagram"}
          classes="absolute bottom-2 right-4 text-white"
        >
          <i class="fa-lg fa-brands fa-instagram" />
        </Link>
      </button>
    {/each}

    <Modal bind:showModal class="fixed top-1/2 left-1/2">
      <Carousel
        autoplay={false}
        slides={carouselPosts.map((_) => ({
          imageUrl: _.media_url,
          caption: _.caption,
          href: _.permalink,
        }))}
      />
    </Modal>
  </article>
  <Link
    title="Retour à l'accueil"
    href="/"
    classes="flex justify-center gap-3 px-6 py-4 text-default"
  >
    <div class="flex gap-2">
      <i class="fa-solid fa-home flex h-8 items-center" />
      <span class="m-auto text-center font-medium">Retour à l'accueil</span>
    </div>
  </Link>
</section>
