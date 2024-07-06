<script setup lang="ts">
import { ref } from 'vue'

import real1 from '~/assets/pictures/real1.jpg'
import real2 from '~/assets/pictures/real2.jpg'
import real3 from '~/assets/pictures/real3.jpg'
import real4 from '~/assets/pictures/real4.jpg'
import real5 from '~/assets/pictures/real5.jpg'
import real6 from '~/assets/pictures/real6.jpg'


import ImageSlider from '~/components/atoms/ImageSlider.vue'



const pics = ref(
  [
    {
      src: real1,
      alt: 'real1',
    },
    {
      src: real2,
      alt: 'real2',
    },
    {
      src: real3,
      alt: 'real3',
    },
    {
      src: real4,
      alt: 'real4',
    },
    {
      src: real5,
      alt: 'real5',
    },
    {
      src: real6,
      alt: 'real6',
    },
  ]
)
</script>

<template>
  <section id="real" class="w-full p-4">
    <ImageSlider :pictures="pics" />
  </section>
</template>
