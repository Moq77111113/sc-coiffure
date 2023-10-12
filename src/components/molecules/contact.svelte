<script lang="ts">
  import { email, phone } from "~/constants";
  import Link from "../atoms/link.svelte";
  import Cta from "../atoms/cta.svelte";
</script>

<Cta classes="text-white border-white">
  <div class="flex flex-col items-center text-sm gap-4">
    <h2 class="flex items-center gap-2">
      <i class="fa-solid fa-comment" /> Nous Contacter
    </h2>
    <div class="flex flex-col items-center text-xs whitespace-nowrap">
      <Link title="phone" href={`tel:${phone}`}
        ><span class="flex gap-2 items-center"
          ><i class="fa-solid fa-phone" />{phone}</span
        ></Link
      >
      <Link title="email" href={`mailto:${email}`}
        ><span class="flex gap-2 items-center whitespace-nowrap"
          ><i class="fa-solid fa-envelope" />{email}</span
        ></Link
      >
    </div>
  </div>
</Cta>
