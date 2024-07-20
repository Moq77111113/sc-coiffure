<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { router, useForm } from '@inertiajs/vue3'
import { reactive } from 'vue'

const form = useForm({
    contact: null,
    message: null,
    remember: false,
})

function submit() {
    form.post('/contact', {
        preserveState: true,
        onSuccess: () => {
            form.reset()
            router.push('/')
        },
    })
}
</script>

<template>
    <section id="contact" class="w-full py-12 md:py-24">
        <div class="container px-4 md:px-6">
            <article class="flex flex-col items-center justify-center space-y-6 text-center">
                <span class="-rotate-2 font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed">
                    Un message ?
                </span>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl/none">
                    Contactez-nous
                </h2>
                <form class="flex flex-col items-center space-y-4 w-full" @submit.prevent="submit">
                    <Input type="text" placeholder="Votre email ou numéro de téléphone" v-model="form.contact"
                        name="contact" class="max-w-sm placeholder:text-muted" />
                    <Textarea placeholder="Votre message" name="message" class="max-w-2xl placeholder:text-muted"
                        v-model="form.message" />
                    <Button type="submit">Envoyer</Button>
                </form>
            </article>
        </div>
    </section>
</template>