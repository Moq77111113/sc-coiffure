<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { router, useForm } from '@inertiajs/vue3'
import { reactive } from 'vue'

const form = useForm({
    contact: null,
    message: null,
    honey: null
})

function submit() {
    form.post('/contact', {
        preserveState: true,
        onSuccess: () => {
            form.reset()
        },
    })
}
</script>

<template>

    <section id="contact" class="w-full py-12 md:py-24"  v-motion-slide-visible-once-top >
        <div class="container px-4 md:px-6">
            <article class="flex flex-col items-center justify-center space-y-6 text-center">
                <span class="-rotate-2 font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed">
                    Un message ?
                </span>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl/none">
                    Contactez-nous
                </h2>
                <form class="flex flex-col items-center space-y-4 w-full" @submit.prevent="submit">
                    <Input type="text" autocomplete="email" placeholder="Votre email ou numéro de téléphone" v-model="form.contact"
                        name="contact" class="max-w-sm placeholder:text-muted" />
                    <Textarea autocomplete="off" placeholder="Votre message" name="message"
                        class="max-w-2xl placeholder:text-muted h-52 my-3 rounded-lg borderBlack p-4 "
                        v-model="form.message" />
                    <input class="hidden" type="text" name="scs-honey" v-model="form.honey"/>
                    <Button type="submit">Envoyer</Button>
                </form>
            </article>
        </div>
    </section>
</template>

