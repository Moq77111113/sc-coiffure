<script setup lang="ts">
import Footer from './AppFooter.vue';
import Header from './AppHeader.vue';
</script>
<template>
  <div class="relative flex justify-between min-h-dvh flex-col">
    <Header />
    <div class="contents flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
