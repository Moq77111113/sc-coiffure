<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <section class="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
    <div class="container px-4 md:px-6">
      <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-4">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight">
              Sublimez votre style avec <span class="text-accent-foreground">SC Coiffure</span>
            </h1>
            <p class="max-w-[600px] md:text-xl">
              Profitez des meilleurs soins capillaires de la région, offerts par notre équipe
              conviviale de coiffeurs passionnés.
            </p>
          </div>
          <div class="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              class="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Prendre Rendez-vous
            </Link>
          </div>
        </div>

        <img
          src="../../../assets/hero.jpg"
          width="550"
          height="550"
          alt="Salon SC Coiffure"
          class="animate-fade-in mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
</template>
