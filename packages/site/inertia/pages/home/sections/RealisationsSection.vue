<script setup lang="ts">
import { ref } from 'vue';
import ImageSlider from '~/components/atoms/ImageSlider.vue';


const pics = ref(Array(12).fill('').map((_, index) => ({src: `https://picsum.photos/seed/${index}/200/300`, alt: `Image ${index}`})))
</script>

<template>
     <section id="real" class="w-full p-4">

    <ImageSlider :pictures="pics" />
    </section>
</template>