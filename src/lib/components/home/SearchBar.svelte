<script lang="ts">
    import {
        CloseOutline,
        GridOutline,
        SearchOutline,
    } from "flowbite-svelte-icons";
    import { createEventDispatcher } from "svelte";
    import { fade, slide } from "svelte/transition";

    export let value: string;

    // export let isAllParks: boolean = false;

    // const dispatch = createEventDispatcher();

    // function allParks() {
    //     isAllParks = !isAllParks;
    //     dispatch("allparks");
    // }
</script>

<div class="flex gap-2 items-center h-14">
    <div class="flex-grow relative h-14">
        <input
            type="text"
            bind:value
            placeholder="Find a park..."
            class="absolute w-full border-2 bg-transparent border-neutral-300 dark:border-neutral-700 rounded-md text-xl pl-11 pr-6 py-3
        outline-none outline-2 outline-offset-0 focus:border-cyan-500 focus:outline-cyan-100 dark:focus:border-cyan-600 dark:focus:outline-cyan-950
        transition-all"
        />
        <div class="absolute h-full flex items-center pl-4">
            <SearchOutline class="text-neutral-400" />
        </div>
    </div>
    <!-- {#if value.length < 1}
        {#if isAllParks}
            <button
                class="flex h-full rounded-md items-center py-3 px-4 gap-1 bg-neutral-600"
                on:click={allParks}
            >
                <CloseOutline />
                Close
            </button>
        {:else}
            <button
                class="flex h-full rounded-md items-center py-3 px-4 gap-1 bg-cyan-900"
                on:click={allParks}
            >
                <GridOutline />
                <div>All Parks</div>
            </button>
        {/if}
    {/if} -->
</div>
