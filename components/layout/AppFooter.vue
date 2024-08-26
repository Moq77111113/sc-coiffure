<script setup lang="ts"></script>
<template>
  <footer
    class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
    <p class="text-xs text-muted">&copy; 2024 SC Coiffure - Tous droits réservés</p>
    <nav
      class="flex gap-4 sm:ml-auto sm:gap-6 [&>a]:text-xs [&>a]:underline-offset-4 [&>a]:hover:underline">
      <NuxtLink href="/legal">Politique de confidentialité</NuxtLink>
      <NuxtLink href="/privacy">Termes et conditions</NuxtLink>
    </nav>
  </footer>
</template>
