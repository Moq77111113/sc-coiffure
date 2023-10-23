<script lang="ts">
  import { address, mapsHref } from "~/constants";
  import Cta from "~/components/atoms/cta.svelte";
  import Link from "~/components/atoms/Link.svelte";
</script>

<Cta classes="text-white border-white">
  <div class="text-sm flex flex-col items-center gap-4">
    <h2 class="flex gap-2 items-center">
      <i class="fa-solid fa-map" /> Nous trouver
    </h2>
    <Link href={mapsHref} newTab title="Notre addresse">
      <article class="flex flex-col items-center text-xs whitespace-nowrap">
        <span>{address.street}</span>
        <span>{address.zip} {address.city}</span>
      </article>
    </Link>
  </div>
</Cta>
