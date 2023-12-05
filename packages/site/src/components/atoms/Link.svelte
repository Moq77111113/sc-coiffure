<script lang="ts">
  export let href: string;
  export let title: string;
  export let classes: string = "";
  export let newTab: boolean = false;
  export let callback = () => {};
</script>

<a
  {href}
  {title}
  class={classes}
  target={newTab ? "_blank" : "_self"}
  rel={newTab ? "noopener, noreferrer" : ""}
  on:click={callback}
>
  {#if newTab}
    <span class="sr-only">Lien vers {title} - S'ouvre dans une nouvelle fenêtre</span>
  {/if}
  <slot />
</a>
