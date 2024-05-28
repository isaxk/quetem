<script lang="ts">
    import { AngleRightOutline } from "flowbite-svelte-icons";

    export let searchQuery: string;
    export let parks: Array<any>;

    let filteredParks: Array<any> = [];

    $: filteredParks = searchQuery
        ? parks.filter((park: any) =>
              park.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : [];
</script>

<div>
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
