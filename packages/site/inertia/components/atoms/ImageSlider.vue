<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageLoader from './ImageLoader.vue';
type Picture = {
  src: string;
  alt: string;
};
type Props = {
  height?: number;
  width?: number;
  pictures: Picture[];
  delay?: number;
  loop?: boolean;
};
const { pictures, delay, loop, height, width } = withDefaults(
  defineProps<Props>(),
  {
    delay: 1500,
    loop: true,
    height: 384,
    width: 256,
  }
);
</script>

<template>
  <Carousel
    class="relative w-full"
    :opts="{
      align: 'center',
      loop,
    }"
    :plugins="[Autoplay({ delay })]"
  >
    <CarouselContent>
      <CarouselItem
        v-for="({ src, alt }, index) in pictures"
        :key="index"
        class="basis-1/2 md:basis-1/3 lg:basis-1/6"
      >
        <ImageLoader
          :src="src"
          :alt="alt"
          :width="width"
          :height="height"
          class="aspect-[3/4] size-full rounded-sm object-cover shadow-xl"
        />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
