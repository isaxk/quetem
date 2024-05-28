<script lang="ts">
    import Favourites from "$lib/components/home/Favourites.svelte";
    import Header from "$lib/components/home/Header.svelte";
    import SearchBar from "$lib/components/home/SearchBar.svelte";
    import SearchResults from "$lib/components/home/SearchResults.svelte";
    import type { ParkType } from "$lib/types";

    export let data: { parks: Array<ParkType> };

    let searchQuery: string = "";
</script>

<svelte:head>
    <title>Quetem - Live wait times</title>
</svelte:head>

<Header />

<div class="flex flex-col gap-4 py-5">
    <SearchBar bind:value={searchQuery} />
    {#if searchQuery.length > 0}
        <SearchResults parks={data.parks} {searchQuery} />
    {:else}
        <Favourites />
    {/if}
</div>
