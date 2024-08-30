<script setup lang="ts">
import { cn } from '~/lib/utils'
import type { PriceTree } from '~/types/prices'

const { tree, isChild } = defineProps<{ tree: PriceTree; isChild?: boolean }>()
</script>

<template>
  <div class="flex flex-col">
    <h2
      :class="
        cn(
          'text-xl font-semibold mb-4 w-full text-center py-4',
          isChild && 'text-lg ',
          !isChild && 'border-y-2',
        )
      ">
      {{ tree.name }}
    </h2>

    <ul class="flex flex-col space-y-2 w-full text-sm md:text-base">
      <li v-for="price in tree.prices" :key="price.name" class="flex justify-between space-x-2">
        <span class="text-wrap">{{ price.name }}</span>
        <span class="font-semibold">{{ price.amount }}€</span>
      </li>
      <li v-for="category in tree.categories" :key="category.name">
        <PriceList :tree="category" is-child />
      </li>
    </ul>
  </div>
</template>
