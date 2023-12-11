<script lang="ts">
  import { social } from "~/constants";
  import Link from "~/components/atoms/Link.svelte";
  import Cta from "~/components/atoms/Cta.svelte";
</script>

<Cta classes="text-white border-white">
  <div class="flex flex-col items-center text-sm gap-4">
    <h3 class="flex items-center gap-2">
      <i class="fa-solid fa-comment" /> Nous Contacter
    </h3>
  
    <div class="flex flex-col items-center text-xs whitespace-nowrap">
       {#if social.phone}
        <Link title="phone" href={`tel:${social.phone}`}>
          <span class="flex gap-2 items-center">
            <i class="fa-solid fa-phone" />{social.phone}</span>
          </Link>
        {/if}

        {#if social.email} 
      <Link title="email" href={`mailto:${social.email}`}
        ><span class="flex gap-2 items-center whitespace-nowrap"
          ><i class="fa-solid fa-envelope" />{social.email}</span
        ></Link
      >
      {/if}
    </div>
  </div>
</Cta>
