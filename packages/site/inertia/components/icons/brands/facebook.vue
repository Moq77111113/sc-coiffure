<script setup lang="ts">
import siFacebook from 'simple-icons/icons/facebook.svg?url'

const props = defineProps<{ class?: string; fill?: string }>()
</script>

<template>
  <img
    :class="props.class"
    :fill="props.fill"
    :src="siFacebook"
    alt="facebook"
  />
</template>
