<script setup lang="ts">
import { ref } from 'vue'

const schedule = ref({
  'lundi': [],
  'mardi-samedi': ['09:00', '17:00'],
  'dimanche': [],
})
</script>

<template>
  <section id="schedule" class="w-full py-8 md:py-12 lg:py-20 bg-muted text-muted-foreground">
    <div class="container w-full sm:px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-2 flex flex-col items-end justify-self-end">
          <h2 class="font-handwritten tracking-wider text-xl/relaxed md:text-3xl/relaxed">
            Les Horaires
          </h2>
          <div class="w-12 h-2 rounded-sm bg-accent-foreground" />
        </div>

        <div class="px-6 md:px-8 lg:px-12">
          <ul class="list-none">
            <li v-for="[day, hours] in Object.entries(schedule)" :key="day">
              <div class="flex justify-between text-xl/tight md:text-2xl/relaxed py-4">
                <h3>{{ day }}</h3>
                <span v-if="!hours.length">Fermé</span>
                <span v-else>{{ hours[0] }} - {{ hours[1] }}</span>
              </div>
              <div class="w-full h-[0.2pt] bg-muted-foreground my-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
