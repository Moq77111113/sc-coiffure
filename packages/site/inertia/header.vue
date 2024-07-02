<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

</script>
<template>
    <header class="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" class="flex items-center justify-center">

        <span class="sr-only">Salon Chic</span>
        </Link>
        <nav class="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" class="text-sm font-medium hover:underline underline-offset-4">
            Services
            </Link>
            <Link href="#" class="text-sm font-medium hover:underline underline-offset-4">
            Team
            </Link>
            <Link href="#" class="text-sm font-medium hover:underline underline-offset-4">
            Contact
            </Link>
        </nav>
    </header>
</template>