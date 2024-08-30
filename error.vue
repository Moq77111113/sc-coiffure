<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page introuvable',
  description: 'Désolé, mais nous ne trouvons pas la page que vous cherchez.',
})
</script>

<template>
  <LayoutAppLayout>
    <div class="py-10 m-auto sm:px-8 my-4 ring-1 ring-accent-foreground sm:rounded">
      <main
        class="max-w-2xl px-4 mx-auto prose prose-pre:bg-muted hover:prose-a:text-muted prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary">
        <h1 class="text-4xl text-center font-bold">
          {{ error.statusCode }}
        </h1>
        <p class="text-lg text-gray-500 dark:text-gray-400">
          {{ error.message }}
        </p>

        <slot />
        <NuxtLink href="/" class="flex mt-4 prose-a:border-solid w-fit mx-auto">Retour</NuxtLink>
      </main>
    </div>
  </LayoutAppLayout>
</template>
