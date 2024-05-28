<script lang="ts">
    import {
        AngleRightOutline,
        StarOutline,
        StarSolid,
    } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    import { fly, slide } from "svelte/transition";
    import Panel from "../ui/Panel.svelte";
    import ParkItem from "../ui/ParkItem.svelte";

    let favourites: Array<any> = [];

    onMount(() => {
        if (localStorage.favourites) {
            favourites = JSON.parse(localStorage.favourites);
        }
    });
</script>

<Panel title="Favourites">
    {#if favourites.length > 0}
        {#each favourites as item, i (item.id)}
            <ParkItem {...item} />
        {/each}
    {:else}
        <div class="px-2 py-4">
            Press the <StarOutline
                size="sm"
                class="text-yellow-500 inline mb-1"
            /> on the park page to pin them here.
        </div>
    {/if}
</Panel>
