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
    import { fly, scale } from "svelte/transition";
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

    let scrolledFar: boolean = false;

    onMount(() => {
        updateDisplayTimeout = setInterval(() => {
            updatedDisplay = moment(lastUpdated).fromNow();
        }, 1000);
        window.addEventListener("scroll", (event) => {
            let scroll = window.scrollY;
            if (scroll >= 30) {
                scrolledFar = true;
            } else {
                scrolledFar = false;
            }
        });
    });

    onDestroy(() => {
        clearInterval(updateDisplayTimeout);
    });

    $: updatedDisplay = moment(lastUpdated).fromNow();
    $: isFavourited = $favourites.some((item: any) => item.id == id);
</script>

<div
    in:fly={{ x: 100, duration: 200, delay: 25 }}
    class="fixed md:relative top-0 left-0 md:-ml-4 w-full z-50 transition-[border-color, drop-shadow] duration-300 {scrolledFar
        ? 'backdrop-blur-sm bg-neutral-50 bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90'
        : 'drop-shadow-none bg-opacity-0'}"
>
    <div class="max-w-screen-md m-auto relative p-4">
        <a
            class="px-0 py-4 top-0 left-4 absolute flex h-full w-max items-center gap-1 text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300 transition-colors"
            href="/"
        >
            <AngleLeftOutline size="md" />
            <div>Back</div>
        </a>
        <div class="flex w-full h-full items-center justify-center">
            <div class="w-36 h-full bg-red-500"></div>
            <div
                class="w-full flex-grow-0 overflow-x-hidden text-ellipsis text-nowrap text-center h-full transition-[opacity, transform] duration-300 md:hidden font-medium {scrolledFar
                    ? 'opactity-1 translate-y-0'
                    : 'opacity-0 translate-y-2'}"
            >
                {name}
            </div>
            <div class="w-36"></div>
        </div>
    </div>
</div>

<div
    class="px-2 py-6 md:pb-3 md:pt-0"
    in:fly={{ x: 100, duration: 200, delay: 70 }}
>
    <div
        class="pt-2 pb-5 border-b-2 border-neutral-300 dark:border-neutral-800"
    >
        <div class="flex gap-2 pt-5">
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
    </div>

    <div
        in:fly={{ x: 100, duration: 200, delay: 115 }}
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

<div class="" in:fly={{ x: 100, duration: 200, delay: 160 }}>
    <slot />
</div>
