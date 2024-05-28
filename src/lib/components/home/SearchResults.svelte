<script lang="ts">
    import { AngleRightOutline } from "flowbite-svelte-icons";
    import ParkItem from "../ui/ParkItem.svelte";
    import Panel from "../ui/Panel.svelte";

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
        <ParkItem {...park} />
    {/each}
</div>
