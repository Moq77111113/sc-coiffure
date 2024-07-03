<script setup lang="ts">
import { siInstagram } from 'simple-icons'

const props = defineProps<{ class?: string; fill?: string }>()
</script>

<template>
  <svg v-html="siInstagram.svg" :class="props.class" :fill="props.fill" />
</template>
