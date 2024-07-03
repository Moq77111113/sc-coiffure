<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Textarea } from '~/components/ui/textarea'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import Layout from '~/components/layout/AppLayout.vue'

import Hero from './sections/HeroSection.vue'
import Schedule from './sections/ScheduleSection.vue'
import SalonSection from './sections/SalonSection.vue'
import RealisationsSection from './sections/RealisationsSection.vue'
defineProps<{ version: number }>()
</script>

<template>
  <Head title="SC Coiffure" />
  <Layout>
    <main class="relative">
      <Hero />
      <Schedule />
      <RealisationsSection />
      <SalonSection />
      <section id="contact" class="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Schedule Your Appointment
              </h2>
              <p
                class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Fill out the form below to book your appointment with one of our talented stylists.
              </p>
            </div>
            <div class="mx-auto w-full max-w-md space-y-2">
              <form class="flex flex-col gap-4">
                <Input type="text" placeholder="Name" class="max-w-lg px-2 flex-1" />
                <Input type="email" placeholder="Email" class="max-w-lg px-2 flex-1" />
                <Textarea placeholder="Message" class="max-w-lg px-2 flex-1" />
                <Button type="submit">Book Appointment</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>
