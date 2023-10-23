<script lang="ts">
  import { register, type SwiperContainer } from "swiper/element/bundle";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import type { Reviews } from "~/types/google/review";
  import Review from "~/components/atoms/Review.svelte";
  export let autoplay = true;
  export let reviews: Reviews["reviews"];
  let keyboard = {
    enabled: true,
    onlyInViewport: true,
  } satisfies SwiperContainer["keyboard"];
  const pagination = {
    enabled: false,
  } satisfies SwiperContainer["pagination"];

  register();
</script>

<swiper-container
  class="w-full h-full flex flex-col bg-primary items-center relative rounded-md max-w-sm"
  slides-per-view={1}
  {keyboard}
  {pagination}
  {autoplay}
  loop
>
  {#each reviews as review, i}
    <swiper-slide class="flex flex-col items-center">
      <Review {review} />
    </swiper-slide>
  {/each}
</swiper-container>
