<script lang="ts">
  export let href: string;
  export let label: string = "";
  export let classes = "";

  import Link from "~/components/atoms/Link.svelte";
</script>

<div
  class={`flex items-center justify-center gap-3 border-2 border-default px-6 py-4 text-default  ${classes}`}
>
  <Link {href} newTab title={"Location"}>
    {#if $$slots.default}<slot />{/if}
    {#if !$$slots.default && label}<span class="m-auto font-medium"
        >{label}</span
      >{/if}
  </Link>
</div>
