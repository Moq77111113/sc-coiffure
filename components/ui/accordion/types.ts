export type RecurviseAccordionSlotProps<T> = {
  value: string
  data: T[]
}

export type RecursiveAccordionProps<T> = RecurviseAccordionSlotProps<T> & {
  subItems?: RecursiveAccordionProps<T>[]
}
