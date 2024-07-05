<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Icons } from '~/components/icons';
const services = [
  {
    name: 'Coupe',
    src: 'https://picsum.photos/seed/coupe/514',
    alt: 'Coupe',
  },
  {
    name: 'Couleur',
    src: 'https://picsum.photos/seed/couleur/514',
    alt: 'Couleur',
  },
  {
    name: 'Balayage',
    src: 'https://picsum.photos/seed/balayage/514',
    alt: 'Balayage',
  },
];
</script>

<template>
  <section id="services" class="w-full py-12 md:py-24">
    <div class="container px-4 md:px-6">
      <article
        class="flex flex-col items-center justify-center space-y-6 text-center"
      >
        <span
          class="rotate-2 font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed"
        >
          Découvrez
        </span>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl/none">
          Nos services
        </h2>

        <div class="grid gap-8 py-4 min-[450px]:grid-cols-2 md:grid-cols-3">
          <template v-for="({ src, alt, name }, idx) in services" :key="name">
            <div
              :class="[
                'm-auto flex flex-col space-y-4',
                {
                  'min-[450px]:col-span-2 md:col-span-1':
                    !!(services.length % 2) && idx === 0,
                },
              ]"
            >
              <h3 class="text-xl font-bold tracking-tighter">{{ name }}</h3>
              <img
                loading="lazy"
                :src="src"
                :alt="alt"
                class="size-[256px] hover:brightness-125 md:size-full"
              />
              <Link
                href="#"
                class="text-md mr-2 flex items-center self-start font-bold tracking-tighter"
                >Voir les prix<Icons.ArrowRight class="ml-2 size-4"
              /></Link>
            </div>
          </template>
        </div>
      </article>
    </div>
  </section>
</template>
