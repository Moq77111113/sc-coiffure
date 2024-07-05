<script setup lang="ts">
import { ref } from 'vue';
import { Icons } from '~/components/icons';
const schedule = ref({
  lundi: [],
  'mardi-samedi': ['09:00', '17:00'],
  dimanche: [],
});
</script>

<template>
  <section
    id="schedule"
    class="w-full bg-muted py-8 text-muted-foreground md:py-12 lg:py-20"
  >
    <div class="container w-full space-y-8 sm:px-4 md:space-y-8 md:px-6">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          class="flex flex-col items-end space-y-2 justify-self-center sm:justify-self-end"
        >
          <h2
            class="font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed"
          >
            Les informations
          </h2>
          <div class="h-2 w-12 rounded-sm bg-accent-foreground" />
        </div>

        <div class="px-6 md:mt-8 md:px-8 lg:px-12">
          <div
            class="flex flex-col justify-between space-y-4 py-4 text-base sm:text-xl/tight md:text-xl/relaxed"
          >
            <span class="flex items-center justify-between"
              ><Icons.Map />
              <p class="line-clamp-1 whitespace-nowrap">
                5 Avenue Garibaldi, 83500 La Seyne-sur-Mer
              </p></span
            >
            <div class="my-2 h-[0.2pt] w-full bg-muted-foreground" />

            <span class="flex items-center justify-between">
              <Icons.Phone />
              <p class="tracking-wider">08.00.00.00.00</p></span
            >
            <div class="my-2 h-[0.2pt] w-full bg-muted-foreground" />
            <span class="flex items-center justify-between">
              <Icons.Mail />
              <p>contact@sccoiffure83.fr</p>
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          class="flex flex-col items-end space-y-2 justify-self-center sm:justify-self-start md:order-2"
        >
          <h2
            class="font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed"
          >
            Les Horaires
          </h2>
          <div class="h-2 w-12 rounded-sm bg-accent-foreground" />
        </div>

        <div class="px-6 md:px-8 lg:px-12">
          <ul class="list-none">
            <li v-for="[day, hours] in Object.entries(schedule)" :key="day">
              <div
                class="line-clamp-1 flex justify-between py-4 text-base sm:text-xl/tight md:text-xl/relaxed"
              >
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
