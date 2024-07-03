<script setup lang="ts">
import { siFacebook } from 'simple-icons'

const props = defineProps<{ class?: string; fill?: string }>()
</script>

<template>
  <svg :class="props.class" :fill="props.fill" v-html="siFacebook.svg" />
</template>
