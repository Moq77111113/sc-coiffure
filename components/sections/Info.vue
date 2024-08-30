<script setup lang="ts">
import { Icons } from '@/components/icons'
import { schedule } from '~/constants/schedule'
import { social } from '~/constants/social'
import { location } from '~/constants/location'
import { entries } from '~/lib/utils'

</script>

<template>
  <section id="schedule" class="w-full bg-muted py-8 text-muted-foreground md:py-12 lg:py-20">
    <div class="container w-full space-y-8 sm:px-4 md:space-y-8 md:px-6">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="flex flex-col items-end space-y-2 justify-self-center sm:justify-self-end">
          <h2 class="font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed">
            Les informations
          </h2>
          <div class="h-2 w-12 rounded-sm bg-accent-foreground" />
        </div>

        <div class="px-6 md:mt-8 md:px-8 lg:px-12">
          <div
            class="m flex flex-col justify-between space-y-4 py-4 text-base sm:text-xl/tight md:text-xl/relaxed">
            <span class="flex items-center justify-between">
              <a :href="location.mapsHref" target="_blank" rel="noopener, noreferrer" aria-label="Adresse du salon">
                <Icons.Map />
              </a>
              <p class="text-right">
                5 Avenue Garibaldi
                <br />
                83500 La Seyne-sur-Mer
              </p>
            </span>
            <div class="my-2 h-[0.2pt] w-full bg-muted-foreground" />

            <span class="flex items-center justify-between">
              <a :href="`tel:${social.phone}`" target="_blank" rel="noopener, noreferrer" aria-label="Appelez-nous">
                <Icons.Phone />
              </a>
              <p class="tracking-wider">{{ social.phone }}</p>
            </span>
            <div class="my-2 h-[0.2pt] w-full bg-muted-foreground" />
            <span class="flex items-center justify-between">
              <a :href="`mailto:${social.email}`" target="_blank" rel="noopener, noreferrer" aria-label="Ecrivez-nous">
                <Icons.Mail />
              </a>
              <p>contact@sccoiffure83.fr</p>
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          class="flex flex-col items-start space-y-2 justify-self-center sm:justify-self-start md:order-2">
          <h2 class="font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed">
            Les Horaires
          </h2>
          <div class="h-2 w-12 rounded-sm bg-accent-foreground" />
        </div>

        <div class="px-6 md:px-8 lg:px-12">
          <ul class="list-none">
            <li v-for="[day, hours] in entries(schedule)" :key="day">
              <div
                class="line-clamp-1 flex justify-between py-4 text-base sm:text-xl/tight md:text-xl/relaxed">
                <h3>{{ day }}</h3>
                <span v-if="!hours.length">Fermé</span>
                <span v-else>{{ hours[0] }} - {{ hours[1] }}</span>
              </div>
              <div class="my-2 h-[0.2pt] w-full bg-muted-foreground" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
