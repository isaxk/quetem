<script lang="ts">
    import type { RideType } from "$lib/types";
    import { fade, slide } from "svelte/transition";
    import Ride from "./Ride.svelte";
    import Panel from "../ui/Panel.svelte";

    export let name: string;
    export let allRides: boolean = false;
    export let rides: Array<RideType>;
</script>

<Panel title={allRides ? "All Attractions" : name}>
    {#each rides as ride, i (ride.id)}
        <Ride {...ride} />
    {/each}
</Panel>
