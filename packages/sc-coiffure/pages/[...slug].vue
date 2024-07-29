<script setup lang="ts">
import Layout from '@/components/layout/AppLayout.vue';
</script>
<template>
  <Layout>
    <div
      class="py-10 m-auto sm:px-8 my-4 ring-1 ring-accent-foreground sm:rounded"
    >
      <main
        class="max-w-2xl px-4 mx-auto prose prose-pre:bg-muted hover:prose-a:text-muted prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary"
      >
        <ContentDoc>
          <template #not-found>
            <h1 class="text-center">Page non trouvée</h1>

            <NuxtLink
              href="/"
              class="flex mt-4 prose-a:border-solid w-fit mx-auto"
            >
              Retour
            </NuxtLink>
          </template>
        </ContentDoc>
      </main>
    </div>
  </Layout>
</template>
