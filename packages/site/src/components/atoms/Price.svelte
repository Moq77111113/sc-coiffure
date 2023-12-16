<script lang="ts">
    import type { Price } from "~/types/price";


export let price: Price


const indexToLabel = (index: number) => {
  switch (index) {
    case 0:
      return "Court";
    case 1:
      return "Mi-long";
    case 2:
      return "Long";
    default:
    return ''
  }
};

</script>

<div class="price relative w-full overflow-hidden flex flex-col sm:flex-row justify-between items-center bg-primary p-4 rounded-md text-secondary ">  
  <div class="z-10 text-center pb-4 sm:pb-0 sm:pr-4">
    <p class="text-md">{price.name}</p>
  </div>

  <div class="z-10 flex gap-2 text-md font-bold">
    {#each price.amounts as amount, i}
      <p class="whitespace-nowrap border-secondary border-r pr-2 last:pr-0 last:border-r-0">
        <span class="flex flex-col text-center">  <small class="text-xs font-light">{indexToLabel(i)}</small>
           {(amount / 100)} €
          
        </span></p>
   
    {/each}
  </div>
</div>

<style>


.price:after {
  @apply absolute bg-accent w-2/3 h-1/2 rounded-full -bottom-1/4 left-0 transform -translate-x-3/4 z-0 ;
  content: '';
  
}
.price::before {
  @apply absolute bg-accent h-2/3 w-1/2 rounded-full -top-1/4 right-0 transform translate-x-3/4 z-0;
  content: '';
}
</style>


 
