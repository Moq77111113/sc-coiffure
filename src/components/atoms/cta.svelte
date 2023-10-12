<script lang="ts">
  export let action: () => void = () => {};
  export let label: string = "";
  export let classes = "";
</script>

<button
  class={`flex items-center justify-center gap-3 border-2 border-default px-6 py-4 text-default min-w-min ${classes}`}
  on:click={action}
>
  {#if $$slots.default}<slot />{/if}
  {#if !$$slots.default && label}<span class="m-auto font-medium">{label}</span
    >{/if}
</button>
