<script lang="ts">
  import type { Day, Schedule } from "~/types";
  import Modal from "~/components/molecules/Modal.svelte";
  import Cta from "~/components/atoms/Cta.svelte";
  import { toFrenchDay, entries, keys } from "~/utils/index";
  import { dayOfWeek } from "~/constants/schedule";
  export let schedule: Schedule;

  const todaySchedule = schedule[dayOfWeek[new Date().getDay()]];
  const formatHour = (h: (typeof schedule)[Day][number]) => {
    if (!h) {
      return "Fermé";
    }

    return `${h[0]} - ${h[1]}`;
  };

  const formatDay = (day: (typeof schedule)[Day]) => {
    const [morning, afternoon] = day;
    if (!morning && !afternoon) {
      return "Fermé";
    }

    if (morning && afternoon) {
      return `${formatHour(morning)} ${formatHour(afternoon)}`;
    }
    return day.filter((_) => _?.length).map(formatHour)[0];
  };

  const sortedWeek = keys(schedule);
  const weekDays = entries(schedule)
    .sort(([a], [b]) => sortedWeek.indexOf(a) - sortedWeek.indexOf(b))
    .map(([day, schedule]) => ({
      day: toFrenchDay(day),
      schedule: formatDay(schedule),
    }));

  let showModal = false;
</script>

<Cta action={() => (showModal = true)} classes="text-white border-white">
  <div class="text-sm flex flex-col items-center gap-4">
    <h2 class="flex gap-2 items-center">
      <i class="fa-solid fa-clock" />Aujourd'hui
    </h2>
    <div class="flex flex-col items-center text-xs">
      <span>{formatDay(todaySchedule)}</span>
      <span class="text-xs">Consulter les horaires</span>
    </div>
  </div>
</Cta>
<Modal bind:showModal>
  <h2 slot="header" class="p-4 font-medium text-lg">Horaires</h2>
  <article class="grid grid-cols p-4">
    {#each weekDays as { day, schedule }}
      <div class="grid grid-cols-2 items-center gap-4">
        <h3 class="text-s col-span-1 text-left">{day}</h3>
        <span
          class="text-xs col-span-1 text-right flex items-center justify-self-end [text-wrap:balance]"
        >
          {schedule}
        </span>
      </div>
    {/each}
  </article>
</Modal>
<artcle class="sr-only">
  {#each weekDays as { day, schedule }}
    <span>{day} : {schedule}</span>
  {/each}
</artcle>
