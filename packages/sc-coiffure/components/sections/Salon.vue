<script setup lang="ts">
import { Icons } from '@/components/icons';
import { social } from '~/constants/social';
</script>

<template>
  <section
    id="us"
    v-motion-slide-visible-once-top
    class="w-full py-12 md:py-24"
  >
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center space-y-8">
        <span
          class="-rotate-2 font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed"
        >
          La Seyne sur Mer depuis 2023
        </span>
        <div
          class="flex flex-col items-center justify-center sm:flex-row sm:space-x-12 md:space-x-24"
        >
          <article
            class="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div class="flex flex-col items-center space-y-6">
              <h2 class="text-2xl font-bold tracking-tighter md:text-4xl">
                Votre équipe chaleureuse chez
                <span class="text-accent-foreground">Sc Coiffure</span>
              </h2>
              <p class="max-w-[900px] lg:text-xl/relaxed xl:text-xl/relaxed">
                Chez Sc Coiffure, nous croyons en la beauté unique de chaque
                personne. C'est pourquoi nous nous engageons à créer des coupes
                et des couleurs qui vous ressemblent, en prenant soin de mettre
                en valeur vos traits individuels.
              </p>
              <div class="h-[0.2pt] w-24 bg-accent-foreground" />
              <div class="flex space-x-4">
                <a
                  :href="social.facebook"
                  alt="Facebook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icons.facebook class="size-6" />
                </a>
                <a
                  :href="social.instagram"
                  alt="Instagram"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icons.instagram class="size-6" />
                </a>
                <a
                  :href="`tel:${social.phone}`"
                  alt="Appelez-nous"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icons.Phone class="size-6" />
                </a>
              </div>
              <div class="h-[0.2pt] w-24 bg-accent-foreground md:hidden" />
            </div>
          </article>

          <article
            class="flex items-center gap-6 py-12 grayscale transition-all duration-200 ease-in-out hover:grayscale-0 sm:grid-cols-2 md:mx-auto lg:gap-12"
          >
            <div class="flex flex-col items-center space-y-4">
              <NuxtImg
                :src="`/pictures/team.webp`"
                alt="L'équipe SC Coiffure"
                class="mx-auto aspect-square w-52 overflow-hidden rounded-full object-cover transition-all duration-300 ease-in-out hover:grayscale sm:w-96"
              />
              <div class="space-y-1 text-center">
                <h3 class="text-xl font-bold">Séverine & Cécile</h3>
                <p class="text-muted">Co-Créatrices</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
