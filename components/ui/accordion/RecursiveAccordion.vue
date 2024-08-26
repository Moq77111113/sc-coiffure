<script setup lang="ts" generic="T">
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import type { RecursiveAccordionProps, RecurviseAccordionSlotProps } from './types'

const { item, class: clazz } = defineProps<{ item: RecursiveAccordionProps<T>; class?: string }>()
</script>

<template>
  <AccordionItem :value="item.value" :class="clazz">
    <AccordionTrigger>
      <slot name="trigger" :item="item">{{ item.value }}</slot>
    </AccordionTrigger>
    <AccordionContent>
      <slot name="content" :data="item.data" />

      <Accordion v-if="item.subItems?.length" type="multiple" class="border-0" collapsible>
        <template v-for="subItem in item.subItems" :key="subItem.value">
          <RecursiveAccordion :item="subItem">
            <slot name="trigger" :item="subItem" />

            <template #content="slotProps: RecurviseAccordionSlotProps<T>">
              <slot name="content" v-bind="slotProps" />
            </template>
          </RecursiveAccordion>
        </template>
      </Accordion>
    </AccordionContent>
  </AccordionItem>
</template>
