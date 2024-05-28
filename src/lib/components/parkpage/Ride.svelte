<script lang="ts">
    import { slide } from "svelte/transition";

    export let name: string;
    export let wait_time: number;
    export let is_open: boolean;

    let waitTimeCss: string = "";

    $: if (wait_time >= 0) waitTimeCss = "text-green-500 dark:text-green-400";
    $: if (wait_time > 28) waitTimeCss = "text-yellow-500 dark:text-yellow-400";
    $: if (wait_time > 55) waitTimeCss = "text-red-500 dark:text-red-400";
    $: if (wait_time > 120 || !is_open)
        waitTimeCss = "text-red-700 dark:text-red-500";
</script>

<div
    class="text-lg flex w-full px-3 py-4 gap-2 items-center border-b-2 border-neutral-200 dark:border-neutral-800 last:border-b-0"
>
    <div
        class="w-full overflow-x-hidden text-nowrap text-ellipsis"
        class:text-neutral-400={!is_open}
    >
        {name}
    </div>
    <div class="font-medium w-32 text-right {waitTimeCss}">
        {#if is_open}
            {wait_time} <span class="font-normal">mins</span>
        {:else}
            Closed
        {/if}
    </div>
</div>
