<script lang="ts">
  import Modal from "~/components/molecules/Modal.svelte";
  import Carousel from "~/components/molecules/Carousel.svelte";
  import Link from "~/components/atoms/Link.svelte";
  import type { Posts } from "~/types/instagram/post";
    import { chunk } from "~/utils";
  export let posts: Posts;

  let carouselPosts = [...posts];
  let showModal = false;

  let chunkSize = 3;
	$: innerWidth = 0
  $: {
    if (innerWidth < 640) {
      chunkSize = 2;
    } else if (innerWidth < 1024) {
      chunkSize = 3;
    } else {
      chunkSize = 4;
    }

    // Adjust chunkSize if the number of posts is not evenly divisible
    const remainder = posts.length % chunkSize;
    if (remainder > 0 && remainder < Math.floor(chunkSize / 2)) {
      chunkSize = Math.ceil(posts.length / 2);
    }
  }
  const toggle = (post: Posts[number]) => {
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
<svelte:window bind:innerWidth on:keydown={handleKeyDown} />

  <article class="container flex m-4 px-2 sm:m-8 sm:px-4 lg:m-12 lg:px-6">
    <div class="gap-x-2 gap-y-4 columns-2 sm:columns-3 md:columns-4  [&>div]:mt-3">
  {#each posts as post (post.id)}
  <div class="relative flex justify-center ">
      <button class="relative h-full max-w-md w-full sm:max-h-72 flex justify-center"  
        aria-label="Ouvrir l'image"
        
        on:click={() => toggle(post)}
      >
        <img
          src={post.media_url}
          alt={post.caption}
          loading="eager"
          class="h-full max-h-72 w-full cursor-pointer border border-white object-cover rounded-lg"
        />
        <Link
          href={post.permalink}
          newTab={true}
          title={"Ouvrir dans instagram"}
          classes="absolute bottom-0.5 right-1 text-white"
        >
          <i class="fa-lg fa-brands fa-instagram" />
        </Link>
 
      </button> 
    </div>
  
  {/each}
  {#if posts.length%2 !== 0} 
  <div class="flex justify-center items-center text-primary bg-black min-h-[8rem] h-auto rounded-lg border border-white
  ">
    SC Coiffure 
  </div>
{/if}

  <Modal bind:showModal>
    <Carousel
      autoplay={false}
      slides={carouselPosts.map((_) => ({
        imageUrl: _.media_url,
        caption: _.caption,
        href: _.permalink,
      }))}
    />
  </Modal>
</div>
</article>
