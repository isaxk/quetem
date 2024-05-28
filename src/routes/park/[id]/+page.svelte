<script lang="ts">
    import Park from "$lib/components/parkpage/Park.svelte";
    import { AngleLeftOutline } from "flowbite-svelte-icons";
    import LandsGrid from "$lib/components/parkpage/LandsGrid.svelte";
    import LandsTabbed from "$lib/components/parkpage/LandsTabbed.svelte";
    import { onDestroy, onMount } from "svelte";
    import type { LandType, ParkType, RideType } from "$lib/types";

    export let data: {
        park: ParkType;
        rides: {
            lands: Array<LandType>;
            rides: Array<RideType>;
        };
    };

    let lastUpdated: EpochTimeStamp;
    let loading: boolean = false;
    let updateInterval: number;

    async function updateRides() {
        loading = true;
        const ridesRes = await fetch(`/api/rides/${data.id}`);
        data.rides = await ridesRes.json();
        lastUpdated = Date.now();
        setTimeout(() => {
            loading = false;
        }, 500);
    }

    onMount(() => {
        updateInterval = setInterval(updateRides, 60000);
    });

    onDestroy(() => {
        clearInterval(updateInterval);
    });
</script>

<svelte:head>
    <title>Quetem - {data.park.name}</title>
</svelte:head>

<a
    class="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors"
    href="/"
>
    <AngleLeftOutline size="md" />
    <div>Back</div>
</a>

<Park {...data.park} {lastUpdated} {loading}>
    <!-- Desktop -->
    <LandsGrid lands={data.rides.lands} />

    <!-- Mobile -->
    <LandsTabbed lands={data.rides.lands} />
</Park>
