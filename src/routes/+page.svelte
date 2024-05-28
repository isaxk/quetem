<script lang="ts">
    import AllParks from "$lib/components/home/AllParks.svelte";
    import Favourites from "$lib/components/home/Favourites.svelte";
    import Header from "$lib/components/home/Header.svelte";
    import SearchBar from "$lib/components/home/SearchBar.svelte";
    import SearchResults from "$lib/components/home/SearchResults.svelte";
    import UiTabs from "$lib/components/ui/UiTabs.svelte";
    import type { ParkType } from "$lib/types";
    import { Tabs } from "bits-ui";
    import { GridOutline, StarOutline } from "flowbite-svelte-icons";

    export let data: { parks: Array<ParkType> };

    let searchQuery: string = "";
</script>

<svelte:head>
    <title>Quetem - Live wait times</title>
</svelte:head>

<Header />

<div class="flex flex-col gap-4 py-5 mx-2">
    <SearchBar bind:value={searchQuery} />

    {#if searchQuery.length > 0}
        <SearchResults parks={data.parks} {searchQuery} />
        <!-- <AllParks parks={data.parks} /> -->
    {:else}
        <UiTabs
            tabs={[
                {
                    title: "Favourites",
                    icon: StarOutline,
                    iconProps: { class: "-translate-y-tick" },
                    content: Favourites,
                },
                {
                    title: "All Parks",
                    icon: GridOutline,
                    content: AllParks,
                    props: { parks: data.parks },
                },
            ]}
        />
    {/if}
</div>
