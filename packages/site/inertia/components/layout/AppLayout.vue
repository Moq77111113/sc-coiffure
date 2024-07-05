<script setup lang="ts">
import Header from './AppHeader.vue';
import Footer from './AppFooter.vue';
</script>
<template>
  <div class="relative flex min-h-dvh flex-col">
    <Header />
    <div class="contents flex-1">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
