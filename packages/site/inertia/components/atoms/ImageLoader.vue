<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ref } from 'vue';
const props = defineProps<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  class?: string;
}>();

const isImageLoaded = ref(false);

const markAsLoaded = () => {
  setTimeout(() => {
    isImageLoaded.value = true;
  }, 1000);
};
</script>

<template>
  <div :class="cn('relative', props.class)">
    <div
      v-show="!isImageLoaded"
      class="absolute size-full animate-pulse rounded-md bg-gradient-to-br from-accent to-accent/25"
    />
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
          'size-full transition-all duration-300 ease-in-out ',
          { ['opacity-100']: isImageLoaded },
          { ['opacity-0']: !isImageLoaded },
          props.class
        )
      "
      @load="markAsLoaded"
    />
  </div>
</template>
