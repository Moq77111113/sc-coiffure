<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

type Picture = {
  src: string
  alt: string
}
type Props = {
  size?: number
  pictures: Picture[]
  delay?: number
  loop?: boolean
}
const { pictures, delay ,loop , size } = withDefaults(defineProps<Props>(), {
  delay: 1500,
  loop: true,
  size: 256
})
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
        class="md:basis-1/3 lg:basis-1/6"
      >
        <div class="p-1 shadow-md h-[256px]">

          <img
            :src="src"
            :alt="alt"
            :height="size"
            :width="size"
            class="w-full h-full object-cover rounded-sm"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
