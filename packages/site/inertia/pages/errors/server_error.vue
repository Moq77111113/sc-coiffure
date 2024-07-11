<script setup lang="ts">
defineProps<{ error: Error }>()
</script>

<template>
  <div class="container">
    <div class="title">Server Error</div>

    <span>{{ error.message }}</span>
  </div>
</template>
