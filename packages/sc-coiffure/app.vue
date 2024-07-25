<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner';
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="red"/>
    <NuxtPage />
    <Toaster close-button />
  </div>
</template>
