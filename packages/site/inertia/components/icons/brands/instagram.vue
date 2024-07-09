<script setup lang="ts">
import siInstagram from 'simple-icons/icons/instagram.svg?url';

const props = defineProps<{ class?: string; fill?: string }>();
</script>

<template>
  <img
    :class="props.class"
    :fill="props.fill"
    alt="instagram"
    :src="siInstagram"
  />
</template>
