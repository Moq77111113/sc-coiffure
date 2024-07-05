<script setup lang="ts">
import { ref } from 'vue'

import { Icons } from '~/components/icons'

const team = ref([
  {
    name: 'Cécile',
    role: 'Créatrice',
    image: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
  {
    name: 'Séverine',
    role: 'Créatrice',
    image: 'https://xsgames.co/randomusers/avatar.php?g=female',
  },
])
</script>

<template>
  <section id="us" class="w-full py-12 md:py-24">
    <div class="container px-4 md:px-6">
      <div
        class="flex flex-col sm:flex-row items-center justify-center sm:space-x-12 md:space-x-24"
      >
        <article class="flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-6 flex flex-col items-center">
            <span
              class="font-handwritten tracking-wider text-xl/relaxed md:text-3xl/relaxed -rotate-2"
            >
              La Seyne sur Mer depuis 2023
            </span>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl/none">
              Votre équipe chaleureuse chez Sc Coiffure
            </h2>
            <p class="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chez Sc Coiffure, nous croyons en la beauté unique de chaque personne. C'est pourquoi
              nous nous engageons à créer des coupes et des couleurs qui vous ressemblent, en
              prenant soin de mettre en valeur vos traits individuels.
            </p>
            <div class="h-[0.2pt] w-24 bg-accent-foreground" />
            <div class="flex space-x-4">
              <a href="#" alt="Facebook">
                <Icons.facebook class="size-6" />
              </a>
              <a href="#" alt="Instagram">
                <Icons.instagram class="size-6" />
              </a>
              <a href="#" alt="Appelez-nous">
                <Icons.Phone class="size-6" />
              </a>
            </div>
            <div class="h-[0.2pt] w-24 bg-accent-foreground md:hidden" />
          </div>
        </article>

        <article
          class="md:mx-auto grid grid-cols-1 items-center gap-6 py-12 sm:grid-cols-2 lg:gap-12"
        >
          <div
            v-for="{ name, role, image } in team"
            :key="name"
            class="flex flex-col items-center space-y-4"
          >
            <img
              :src="image"
              :alt="name"
              class="mx-auto w-52 sm:w-96 aspect-square overflow-hidden rounded-full object-cover hover:grayscale transition-all duration-300 ease-in-out"
            />
            <div class="space-y-1 text-center">
              <h3 class="text-xl font-bold">{{ name }}</h3>
              <p class="text-muted">{{ role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
