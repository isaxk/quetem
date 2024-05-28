<script lang="ts">
    import type { ParkType } from "$lib/types";
    import { AngleRightOutline } from "flowbite-svelte-icons";
    import SearchResults from "./SearchResults.svelte";
    import Panel from "../ui/Panel.svelte";
    import ParkItem from "../ui/ParkItem.svelte";

    export let parks: Array<ParkType>;

    let AZparks: Array<ParkType> = parks.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
</script>

<Panel title="All Parks">
    {#each AZparks as park, i (park.id)}
        <ParkItem {...park} />
    {/each}
</Panel>
