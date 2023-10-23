<script lang="ts">
  export let showModal: boolean;

  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="max-w-sm sm:max-w-md w-auto rounded-md p-1 z-10 mx-2 sm:m-auto"
>
  <div
    on:click|stopPropagation
    role="button"
    tabindex="0"
    class="flex flex-col"
  >
    <slot name="header" />
    <hr />
    <slot />
    <hr />

    <button tabindex="0" on:click={() => dialog.close()}
      >{#if $$slots.close}
        <slot name="close" />
      {:else}
        <div class="float-right p-4 flex items-center gap-1">
          <i class="fa-solid fa-close flex items-center h-8" /><span
            class="texrt-xs">Fermer</span
          >
        </div>
      {/if}
    </button>
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog[open] {
    animation: zoom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
