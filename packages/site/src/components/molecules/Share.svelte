<script lang="ts">
  import { share } from '~/constants/sharing';
  import { useShare } from '~/services/share/share';
  import { onMount } from 'svelte';
  import Link from '~/components/atoms/Link.svelte';
  import { social } from '~/constants';
    import { fade } from 'svelte/transition';

  let open = false;
  const toggle = () => {
    open = !open;
  };

  const { facebook, whatsapp, copyToClipboard } = useShare(
    social.web,
    share.message
  );

  let toggleButton: HTMLButtonElement;
  const shareFunction = () => {
    try {
      navigator.share({
        title: share.title,
        text: share.message,
        url: social.web,
      });
    } catch (err) {
      toggle();
    }
  };

  onMount(() => {
    return () => {
      window.removeEventListener('scroll', scrollSpy);
    };
  });

  const scrollSpy = () => {
    setTimeout(() => {
      open = false;
    }, 250);
  };

 
</script>

<svelte:window on:scroll={scrollSpy} />
<div class="relative container flex justify-center items-center">
  <button
    class="cursor-pointer h-10 rounded-full w-10 hover:text-accent border-current flex items-center justify-center focus:outline-none"
    on:click={shareFunction} bind:this={toggleButton}
  
    aria-label="Partager"
    ><i class="fa-solid fa-share-nodes hover:text-accent" /></button
  >
  {#if open} 
  <div
    transition:fade
    class="absolute flex flex-col items-center justify-center transition-all duration-500 ease-in-out"
  >
    <Link
      title="facebook"
      href={facebook}
      newTab
      classes={'absolute flex items-center justify-center h-8 w-8 rounded-full border border-current top-6 right-6 cursor-pointer bg-default text-default hover:text-accent'}
      callback={() => {
        open = false;
      }}><i class="fa-brands fa-facebook" /></Link
    >

    <Link
      title="whatsapp"
      href={whatsapp}
      newTab
      classes="absolute flex items-center justify-center h-8 w-8 rounded-full border border-current top-6 cursor-pointer bg-default text-default hover:text-accent"
      callback={() => {
        open = false;
      }}><i class="fa-brands fa-whatsapp" /></Link
    >
    <button
      on:click={() =>
        copyToClipboard(
          () => {
            alert('Le lien a été copié');
            open = false;
          },
          () => {
            alert('Une erreur est survenue');
            open = false;
          }
        )}
      class="absolute flex items-center justify-center h-8 w-8 rounded-full border border-current top-6 left-6 cursor-pointer bg-default text-default hover:text-accent"
      ><i class="fa-solid fa-copy" /></button
    >
  </div>
  {/if}
</div>
