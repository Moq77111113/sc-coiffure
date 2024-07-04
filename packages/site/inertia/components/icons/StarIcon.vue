<script setup lang="ts">
import { computed, defineProps } from 'vue'
type Props = {
  width: number
  height: number
  fillColor: string
  fillPercentage: number
}

const props = defineProps<Props>()

const clipWidth = computed(() => {
  return props.width ? (props.width * props.fillPercentage) / 100 : 0
})

const clipPath = computed(() => {
  return props.fillPercentage ? 'url(#half-clip)' : ''
})
</script>
<template>
  <svg :width="width" :height="height" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="half-clip">
        <rect :width="clipWidth" height="100%" />
      </clipPath>
    </defs>
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
      fill="lightgray"
    />
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
      :fill="fillColor"
      :clip-path="clipPath"
    />
  </svg>
</template>
