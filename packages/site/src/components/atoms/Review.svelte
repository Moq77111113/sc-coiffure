<script lang="ts">
  import type { Reviews } from "~/types/google/review";
  import { formatDate, getRating } from "~/utils";

  export let review: Reviews["reviews"][number];
</script>

<div class="flex flex-col p-4 gap-2 items-center">
  <div class="flex flex-col items-center">
    <img
      src={review.reviewer.profilePhotoUrl}
      class="h-8 w-8 rounded-full"
      alt={review.reviewer.displayName}
    />
    <div class="flex flex-row items-center">
      <p class="text-center text-sm">
        {#each Array(getRating(review.starRating)).fill(undefined) as _}<i
            class="fa-solid fa-star fa-2xs"
          />
        {/each}
      </p>
    </div>
    <p class="text-center font-bold text-xl">
      {review.reviewer.displayName}
    </p>
    <p class="text-center text-xs">{formatDate(new Date(review.createTime))}</p>
  </div>
  <div class="flex flex-col items-center max-h-16">
    <p class="text-center text-xs text-ellipsis overflow-hidden line-clamp-3">
      {review.comment}
    </p>
  </div>
</div>
