<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import { Textarea } from '~/components/ui/textarea'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import Layout from '~/components/layout/AppLayout.vue'

import Hero from './sections/HeroSection.vue'
import Schedule from './sections/ScheduleSection.vue'
defineProps<{ version: number }>()
</script>

<template>
  <Head title="SC Coiffure" />
  <Layout>
    <main>
      <Hero />
      <Schedule />
     
      <section id="team" class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Talented Stylists
              </h2>
              <p
                class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Our team of experienced and passionate stylists are dedicated to providing you with
                exceptional hair care services.
              </p>
            </div>
          </div>
          <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div class="flex flex-col items-center space-y-4">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="300"
                height="300"
                alt="Stylist 1"
                class="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
              <div class="space-y-1 text-center">
                <h3 class="text-xl font-bold">Emma Styles</h3>
                <p class="text-muted-foreground">Master Stylist</p>
              </div>
            </div>
            <div class="flex flex-col items-center space-y-4">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="300"
                height="300"
                alt="Stylist 2"
                class="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
              <div class="space-y-1 text-center">
                <h3 class="text-xl font-bold">Michael Cuts</h3>
                <p class="text-muted-foreground">Senior Stylist</p>
              </div>
            </div>
            <div class="flex flex-col items-center space-y-4">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="300"
                height="300"
                alt="Stylist 3"
                class="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              />
              <div class="space-y-1 text-center">
                <h3 class="text-xl font-bold">Sophia Color</h3>
                <p class="text-muted-foreground">Color Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    <footer
      class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
    >
      <p class="text-xs text-muted-foreground">&copy; 2024 Salon Chic. All rights reserved.</p>
      <nav class="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" class="text-xs hover:underline underline-offset-4"> Privacy Policy </Link>
        <Link href="#" class="text-xs hover:underline underline-offset-4"> Terms of Service </Link>
      </nav>
    </footer>
  </Layout>
</template>
