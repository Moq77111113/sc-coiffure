<script lang="ts">
  import { register, type SwiperContainer } from "swiper/element/bundle";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import Link from "./link.svelte";

  export let slides: { imageUrl: string; caption: string; href?: string }[] =
    [];
  export let autoplay = true;

  register();
  let keyboard = {
    enabled: true,
    onlyInViewport: true,
  } satisfies SwiperContainer["keyboard"];
  const pagination = {
    enabled: false,
    type: "progressbar",
  } satisfies SwiperContainer["pagination"];
</script>

<swiper-container
  class="w-full h-full flex flex-col bg-black items-center relative"
  slides-per-view={1}
  {keyboard}
  {pagination}
  {autoplay}
  navigation
  loop
>
  {#each slides as slide, i}
    <swiper-slide lazy={false} class="h-full self-center p-2">
      <img
        class="w-full h-full shadow-xl rounded-sm text-white"
        src={slide.imageUrl}
        alt={`Image ${i + 1}`}
      />
      <span class="sr-only">{slide.caption}</span>
      {#if slide.href}
        <Link
          href={slide.href}
          newTab={true}
          title={"Ouvrir dans instagram"}
          classes="absolute bottom-2 right-4 text-white z-50 "
        >
          <i class="fa-lg fa-brands fa-instagram" />
        </Link>
      {/if}
    </swiper-slide>
  {/each}
</swiper-container>
