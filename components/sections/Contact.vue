<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { reactive } from 'vue';
import { toast } from 'vue-sonner';
import { entries } from '~/lib/utils';
const form = reactive({
  contact: '',
  message: '',
  honey: '',
});

const { token } = defineProps<{ token: string }>();
async function submit() {
  const formData = new FormData();
  for (const [key, value] of entries(form)) {
    formData.append(key, value);
  }

  const sendMessage = () =>
    $fetch('/api/contact', {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: formData,
    });

  toast.promise(sendMessage, {
    loading: 'Envoi en cours...',
    success: () => {
      form.contact = '';
      form.message = '';
      form.honey = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });

      return 'Merci pour votre message !';
    },
    error: () =>
      "Une erreur s'est produite lors de l'envoi de votre message, veuillez réessayer plus tard.",
  });
}
</script>

<template>
  <section
    id="contact"
    v-motion-slide-visible-once-top
    class="w-full py-12 md:py-24"
  >
    <div class="container px-4 md:px-6">
      <article
        class="flex flex-col items-center justify-center space-y-6 text-center"
      >
        <span
          class="-rotate-2 font-handwritten text-2xl/relaxed tracking-wider md:text-3xl/relaxed"
        >
          Un message ?
        </span>
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl/none">
          Contactez-nous
        </h2>
        <form
          class="flex flex-col items-center space-y-4 w-full"
          @submit.prevent="submit"
        >
          <label class="sr-only"
            >Votre email ou numéro de téléphone</label
          >
          <Input
            v-model="form.contact"
            type="text"
            autocomplete="email"
            placeholder="Votre email ou numéro de téléphone"
            name="contact"
            class="max-w-sm placeholder:text-muted"
          />
          <label class="sr-only">Votre message</label>
          <Textarea
            v-model="form.message"
            autocomplete="off"
            placeholder="Votre message"
            name="message"
            class="max-w-2xl placeholder:text-muted h-52 my-3 rounded-lg borderBlack p-4"
          />
          <Input
            v-model="form.honey"
            class="hidden"
            type="text"
            name="scs-honey"
          />
          <Button type="submit">Envoyer</Button>
        </form>
      </article>
    </div>
  </section>
</template>
