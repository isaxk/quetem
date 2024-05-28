<script lang="ts">
    import {
        AngleRightOutline,
        StarOutline,
        StarSolid,
    } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    import { fly, slide } from "svelte/transition";

    let favourites: Array<any> = [];

    onMount(() => {
        if (localStorage.favourites) {
            favourites = JSON.parse(localStorage.favourites);
        }
    });
</script>

<div class="border-2 border-neutral-700 rounded-md min-h-80 pb-4 mt-1">
    <div
        class="flex items-center gap-2 text-xl font-medium py-3 px-3 bg-neutral-800 rounded-t-md"
    >
        <StarSolid size="lg" class="text-yellow-500 -translate-y-tick" />
        <div>Favourites</div>
    </div>
    <div class="py-2 px-5">
        {#if favourites.length > 0}
            {#each favourites as item, i (item.id)}
                <div
                    class="flex items-center p-1 hover:bg-neutral-800
                    rounded-md transition-colors"
                >
                    <a
                        href="/park/{item.id}"
                        class="block w-full px-2 py-2 text-lg"
                    >
                        {item.name}
                    </a>
                    <div class="">
                        <a href="/park/{item.id}">
                            <AngleRightOutline />
                        </a>
                    </div>
                </div>
                <div
                    class="border-b-2 border-neutral-800 h-1 my-1 last:border-b-0"
                ></div>
            {/each}
        {:else}
            <div class="px-2 py-4">
                Press the <StarOutline
                    size="sm"
                    class="text-yellow-500 inline mb-1"
                /> on the park page to pin them here.
            </div>
        {/if}
    </div>
</div>
