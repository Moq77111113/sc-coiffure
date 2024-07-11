<script setup lang="ts">
import { computed } from 'vue'
type Props = {
  size?: number
  fillColor: string
  fillPercentage: number
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
})

const clipWidth = computed(() => (props.size * props.fillPercentage) / 100)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath :id="props.id">
        <rect :width="clipWidth" height="100%"></rect>
      </clipPath>
    </defs>
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
      fill="lightgray"
    ></path>
    <path
      d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
      :fill="props.fillColor"
      :clip-path="`url(#${props.id})`"
    ></path>
  </svg>
</template>
