<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>
<template>
  <footer
    class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
  >
    <p class="text-xs text-muted">&copy; 2024 SC Coiffure - Tous droits réservés</p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <Link href="#" class="text-xs hover:underline underline-offset-4">
        Politique de confidentialité
      </Link>
      <Link href="#" class="text-xs hover:underline underline-offset-4">
        Termes et conditions
      </Link>
    </nav>
  </footer>
</template>
