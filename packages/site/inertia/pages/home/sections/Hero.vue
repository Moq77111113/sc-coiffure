<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Icons } from '~/components/icons';
import HeroImg from '~/assets/hero.jpg';
</script>

<template>
  <section class="relative w-full py-12 md:py-24 xl:py-48">
    <div class="container px-4 md:px-6">
      <div
        class="grid gap-6 sm:grid-cols-[1fr_400px] sm:gap-12 xl:grid-cols-[1fr_600px]"
      >
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-4">
            <h1
              class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight text-center whitespace-break-spaces sm:whitespace-normal"
            >
              Sublimez votre style avec
              <span class="text-accent-foreground">SC Coiffure</span>
            </h1>
            <p class="max-w-[600px] md:text-xl">
              Profitez des meilleurs soins capillaires de la région, offerts par
              notre équipe conviviale de coiffeurs passionnés.
            </p>
          </div>

          <Link
            href="#"
            class="inline-flex h-12 items-center max-w-[250px] justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            <Icons.Phone class="w-6 h-6 mr-2" />
            Prendre Rendez-vous
          </Link>
        </div>

        <img
          loading="lazy"
          :src="HeroImg"
          width="550"
          height="550"
          alt="Salon SC Coiffure"
          class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
</template>
