<script lang="ts">
    import { Tabs } from "bits-ui";

    import Land from "$lib/components/parkpage/Land.svelte";
    import Park from "$lib/components/parkpage/Park.svelte";
    import Ride from "$lib/components/parkpage/Ride.svelte";
    import { AngleLeftOutline } from "flowbite-svelte-icons";
    import LandsGrid from "$lib/components/parkpage/LandsGrid.svelte";
    import LandsTabbed from "$lib/components/parkpage/LandsTabbed.svelte";
    import { onMount } from "svelte";
    import moment from "moment";

    export let data: any;

    let lastUpdated: EpochTimeStamp;
    let loading = false;

    async function updateRides() {
        loading = true;
        const ridesRes = await fetch(`/api/rides/${data.id}`);
        const rides = await ridesRes.json();
        data.rides = rides;
        lastUpdated = Date.now();
        setTimeout(() => {
            loading = false;
        }, 1000);
    }

    onMount(() => {
        setInterval(updateRides, 60000);
    });
</script>

<a
    class="flex items-center gap-1 text-neutral-400 hover:text-neutral-300 transition-colors"
    href="/"
>
    <AngleLeftOutline size="md" />
    <div>Back</div>
</a>

<Park {...data.park} {lastUpdated} {loading}>
    <!-- Desktop -->
    <LandsGrid {data} />

    <!-- Mobile -->
    <LandsTabbed {data} />
</Park>
