<script lang="ts">
    import Park from "$lib/components/parkpage/Park.svelte";
    import { onDestroy, onMount } from "svelte";
    import type { LandType, ParkType, RideType } from "$lib/types";
    import UiTabs from "$lib/components/ui/UiTabs.svelte";
    import Land from "$lib/components/parkpage/Land.svelte";

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

    let ready: boolean = false;

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
        ready = true;
        updateInterval = setInterval(updateRides, 60000);
    });

    onDestroy(() => {
        clearInterval(updateInterval);
    });
</script>

<svelte:head>
    <title>Quetem - {data.park.name}</title>
</svelte:head>

{#if ready}
    <Park {...data.park} {lastUpdated} {loading}>
        <!-- Desktop -->
        <UiTabs
            tabs={data.rides.lands.map((land) => {
                return {
                    title: land.name,
                    content: Land,
                    props: { ...land },
                };
            })}
        />

        {#if data.rides.lands.length < 1}
            <div class="py-14 px-2 text-center">
                <div class="text-xl font-medium">
                    Could not fetch wait times
                </div>
                <div class="text-md font-light">
                    Either wait times are unavailable or this park does not have
                    any.
                </div>
            </div>
        {/if}
    </Park>
{/if}
