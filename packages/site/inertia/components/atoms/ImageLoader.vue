<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';
const props = defineProps<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  class?: string;
}>();

const isImageLoaded = ref(false);
</script>

<template>
  <div v-show="!isImageLoaded" class="absolute top-0 bg-red-500">
    <div class="card-image loading"></div>
  </div>
  <img
    :src="props.src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    :sizes="props.sizes"
    :loading="isImageLoaded ? 'eager' : 'lazy'"
    decoding="async"
    :class="
      cn(
        'size-full  transition-all duration-300 ease-in',
        { visible: isImageLoaded },
        { invisible: !isImageLoaded },
        props.class
      )
    "
    @load="() => (isImageLoaded = true)"
  />
</template>
