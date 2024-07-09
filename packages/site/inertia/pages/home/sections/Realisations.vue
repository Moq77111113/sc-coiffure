<script setup lang="ts">
import { ref } from 'vue';

import ImageSlider from '@/components/atoms/ImageSlider.vue';

const pics = ref([
  {
    src: 'pictures/real1.jpg',
    alt: 'real1',
  },
  {
    src: 'pictures/real2.jpg',
    alt: 'real2',
  },
  {
    src: 'pictures/real3.jpg',
    alt: 'real3',
  },
  {
    src: 'pictures/real4.jpg',
    alt: 'real4',
  },
  {
    src: 'pictures/real5.jpg',
    alt: 'real5',
  },
  {
    src: 'pictures/real6.jpg',
    alt: 'real6',
  },
]);
</script>

<template>
  <section id="real" class="w-full p-4">
    <ImageSlider :pictures="pics" />
  </section>
</template>
