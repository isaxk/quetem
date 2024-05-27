<script lang="ts">
    import Favourites from "$lib/components/home/Favourites.svelte";
    import Info from "$lib/components/home/Info.svelte";
    import Search from "$lib/components/home/Search.svelte";
    import { AngleRightOutline } from "flowbite-svelte-icons";

    export let data: any;

    let searchQuery: string = "";
    let filteredParks: Array<any> = [];

    $: filteredParks = searchQuery
        ? data.parks.filter((park: any) =>
              park.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : [];
</script>

<Info />

<div class="grid grid-cols-1 gap-4 py-8">
    <Search bind:value={searchQuery} />
    {#if searchQuery.length > 0}
        <div class="py-3">
            {#each filteredParks as park, i (park.id)}
                <a
                    href="/park/{park.id}"
                    class="flex text-lg p-3 hover:bg-neutral-800
                rounded-md transition-colors"
                >
                    <div class="w-full">
                        {park.name}
                    </div>
                    <div class="">
                        <AngleRightOutline />
                    </div>
                </a>
                <div
                    class="border-b-2 border-neutral-800 h-1 my-1 last:border-b-0"
                ></div>
            {/each}
        </div>
    {:else}
        <Favourites />
    {/if}
</div>
