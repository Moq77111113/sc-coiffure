<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Icons } from '@/components/icons'

type Review = {
  owner: string
  date: string
  avatarUrl: string
  score: number
  content: string
}
interface Props {
  reviews?: Review[]
  delay?: number
  loop?: boolean
}

const { delay, loop } = withDefaults(defineProps<Props>(), {
  delay: 2500,
  loop: true,
  reviews: () => [
    {
      owner: 'John Doe',
      date: '2024-05-01',
      avatarUrl: 'https://picsum.photos/seed/johndoe/80',
      score: 4,
      content: "Great service, I'll be back!",
    },
    {
      owner: 'Jane Doe',
      date: '2024-01-02',
      avatarUrl: 'https://picsum.photos/seed/janedoe/80',
      score: 5,
      content: 'I love this',
    },
    {
      owner: 'John Smith',
      date: '2023-01-03',
      avatarUrl: 'https://picsum.photos/seed/johnsmith/80',
      score: 3.2,
      content: 'Good job!',
    },
    {
      owner: 'Jane Smith',
      date: '2024-07-04',
      avatarUrl: 'https://picsum.photos/seed/janesmith/80',
      score: 4.5,
      content:
        'I like it! I want to say that they provided to me such a good hair cut, we start with a good conversation and they understood what I wanted. I am very happy with the result.',
    },
  ],
})

const getRelativeDate = (date: string) => {
  const now = new Date()
  const reviewDate = new Date(date)
  const diff = now.getTime() - reviewDate.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'Today'

  if (days < 60) return `${days} days ago`

  if (days < 365) {
    const months = Math.floor(days / 30)
    return `${months} months ago`
  }

  return `${Math.floor(days / 365)} years ago`
}

function getFillPercentage(score: number, starIndex: number) {
  if (score >= starIndex) return 100
  if (score < starIndex && score > starIndex - 1)
    return (score - starIndex + 1) * 100
  return 0
}
</script>

<template>
  <section id="ig" class="w-full py-8 md:py-12 lg:py-20">
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center space-y-6">
        <span
          class="-rotate-2 font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed"
        >
          Ils en parlent
        </span>
        <article class="flex flex-col space-y-6">
          <Carousel
            class="relative mx-auto w-full max-w-[300px] py-6 sm:max-w-[400px] md:max-w-[900px] xl:max-w-full"
            :opts="{
              align: 'center',
              loop,
            }"
            :plugins="[Autoplay({ delay })]"
          >
            <CarouselContent>
              <CarouselItem
                v-for="(
                  { owner, date, score, content, avatarUrl }, index
                ) in reviews"
                :key="index"
                class="md:basis-1/3 xl:basis-1/4"
              >
                <article
                  class="relative mt-16 flex h-[200px] flex-col items-center space-y-4 rounded-sm border-2 border-border bg-transparent p-4 font-medium text-muted brightness-110 transition-all duration-300 ease-in-out md:hover:mt-12 lg:h-[250px]"
                >
                  <img
                    :src="avatarUrl"
                    alt="avatar"
                    class="absolute -top-12 left-1/2 size-20 -translate-x-1/2 rounded-full border-2 border-white bg-white shadow-xl shadow-card"
                  />
                  <div class="flex flex-col items-center">
                    <h4 class="font-bold">{{ owner }}</h4>
                    <p class="text-xs/relaxed">{{ getRelativeDate(date) }}</p>
                    <div class="flex py-2">
                      <Icons.Star
                        v-for="i in 5"
                        :id="`${owner.replace(/\W/gi, '')}-star-${i}`"
                        :key="i"
                        fill-color="hsl(48, 100%, 48%)"
                        :fill-percentage="getFillPercentage(score, i)"
                      />
                    </div>
                  </div>

                  <p
                    class="prose-invert line-clamp-2 text-sm md:line-clamp-3 lg:line-clamp-4"
                  >
                    {{ content }}
                  </p>
                </article>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious class="hidden md:flex" />
            <CarouselNext class="hidden md:flex" />
          </Carousel>
        </article>
      </div>
    </div>
  </section>
</template>
