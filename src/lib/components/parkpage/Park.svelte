<script lang="ts">
    import { createFavouritesStore } from "$lib/stores/favourites";
    import {
        AddressBookOutline,
        AngleLeftOutline,
        ClockOutline,
        HourglassOutline,
        MapPinAltOutline,
        StarOutline,
        StarSolid,
    } from "flowbite-svelte-icons";
    import { onDestroy, onMount } from "svelte";
    import { scale } from "svelte/transition";
    import Page from "../../../routes/park/[id]/+page.svelte";
    import moment from "moment";

    export let name: string;
    export let country: string;
    export let continent: string;
    export let latitude: string;
    export let longitude: string;
    export let id: number;

    export let lastUpdated: EpochTimeStamp = Date.now();
    export let loading: boolean;

    let isFavourited = false;
    let updatedDisplay: string = "";
    const favourites = createFavouritesStore();

    let updateDisplayTimeout: number;

    function favourite() {
        if (!isFavourited) {
            favourites.addFavourite({ name, id });
        }
    }

    function unFavourite() {
        if (isFavourited) {
            favourites.removeFavourite(id);
        }
    }

    onMount(() => {
        updateDisplayTimeout = setInterval(() => {
            updatedDisplay = moment(lastUpdated).fromNow();
        }, 1000);
    });

    onDestroy(() => {
        clearInterval(updateDisplayTimeout);
    });

    $: updatedDisplay = moment(lastUpdated).fromNow();
    $: isFavourited = $favourites.some((item: any) => item.id == id);
</script>

<div class="px-2 py-3">
    <div class="pt-2 pb-5 flex gap-2 border-b-2 border-neutral-800">
        <div class="w-full">
            <div class="text-3xl font-bold">{name}</div>
            <div class="text-md font-light">{country}, {continent}</div>
        </div>
        <div class="flex p-2 items-center gap-2">
            {#if isFavourited == true}
                <button
                    on:click={unFavourite}
                    in:scale={{ duration: 400, delay: 0 }}
                >
                    <StarSolid size="lg" class="text-yellow-400" />
                </button>
            {:else}
                <button on:click={favourite}>
                    <StarOutline size="lg" />
                </button>
            {/if}
            <a
                href="https://www.google.com/maps/search/?api=1&query={latitude},{longitude}"
                class=""
            >
                <MapPinAltOutline size="lg" />
            </a>
        </div>
    </div>

    <div
        class="flex flex-col sm:flex-row items-start sm:items-center mt-10 md:mt-14 md:mb-2"
    >
        <div class="flex gap-1 items-center w-full text-2xl font-medium">
            <HourglassOutline size="lg" /> Live Wait Times:
        </div>
        <div
            class="flex items-center justify-start sm:justify-end gap-2 text-md min-w-60 font-light text-neutral-400"
        >
            {#if loading}
                Refreshing...
            {:else}
                <ClockOutline class="translate-x-tick" />
                <div class="">updated {updatedDisplay}</div>
            {/if}
        </div>
    </div>
</div>

<slot />
