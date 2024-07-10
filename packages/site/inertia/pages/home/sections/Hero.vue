<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { Icons } from '@/components/icons';
</script>

<template>
  <section class="relative w-full py-12 md:py-24 xl:py-48">
    <div class="container px-4 md:px-6">
      <div
        class="grid gap-6 md:grid-cols-[1fr_400px] md:gap-12 xl:grid-cols-[1fr_600px]"
      >
        <div class="flex flex-col items-center space-y-4 md:items-baseline">
          <div class="flex flex-col items-center space-y-4 md:items-start">
            <h1
              class="whitespace-break-spaces text-center text-3xl font-bold tracking-tighter sm:whitespace-normal sm:text-4xl md:text-start md:text-5xl xl:text-6xl/tight"
            >
              Sublimez votre style avec
              <span class="text-accent-foreground">SC Coiffure</span>
            </h1>
            <p
              class="max-w-[600px] text-center text-sm sm:text-lg md:self-start md:text-start md:text-xl"
            >
              Profitez des meilleurs soins capillaires de la région, offerts par
              notre équipe conviviale de coiffeurs passionnés.
            </p>
          </div>
          <Link
            href="#"
            class="inline-flex h-12 max-w-[250px] items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Icons.Phone class="mr-2 size-6" />
            Prendre Rendez-vous
          </Link>
        </div>

        <img
          loading="eager"
          :src="`/hero.webp`"
          width="550"
          height="550"
          decoding="async"
          alt="Salon SC Coiffure"
          sizes="(max-width: 480px) 100vw,(max-width: 768px) 90vw, 1200px"
          class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
</template>
