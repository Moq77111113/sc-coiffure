<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let timeRemaining = calculateTimeRemaining();

  function calculateTimeRemaining() {
    const targetDate = new Date('2023-12-05T10:00:00+01:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
  let interval: NodeJS.Timeout;

  onMount(() => {
    interval = setInterval(() => {
      timeRemaining = calculateTimeRemaining();
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="text-center border p-2 rounded-xl">
  <div
    class="flex justify-around gap-4 text-center [&>*>h2]:text-sm [&>*>h2]:sm:text-xl [&>*>h2]:font-bold [&>*>p]:text-sm [&>*>p]:font-semibol"
  >
    <div>
      <h2>{timeRemaining.days}</h2>
      <p>jours</p>
    </div>

    <div>
      <h2>{timeRemaining.hours}</h2>
      <p>heures</p>
    </div>

    <div>
      <h2>{timeRemaining.minutes}</h2>
      <p>minutes</p>
    </div>

    <div>
      <h2>{timeRemaining.seconds}</h2>
      <p>secondes</p>
    </div>
  </div>
</div>
