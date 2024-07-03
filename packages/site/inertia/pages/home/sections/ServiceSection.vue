<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { Icons } from '~/components/icons'
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
]
</script>

<template>
  <section id="services" class="w-full py-12 md:py-24">
    <div class="container px-4 md:px-6">
      <article class="flex flex-col items-center justify-center space-y-6 text-center">
        <span class="font-handwritten tracking-wider text-xl/relaxed md:text-3xl/relaxed rotate-2">
          Découvrez
        </span>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl/none">Nos services</h2>

        <div class="grid sm:grid-cols-3 gap-8 py-4">
          <template v-for="{ src, alt, name } in services" :key="name">
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <h3 class="text-xl font-bold tracking-tighter">{{ name }}</h3>
              <img :src="src" :alt="alt" class="hover:brightness-125" />
              <Link
                href="#"
                class="mr-2 self-start flex items-center text-md font-bold tracking-tighter"
                >Voir les prix<Icons.ArrowRight class="ml-2 size-4"
              /></Link>
            </div>
          </template>
        </div>
      </article>
    </div>
  </section>
</template>
