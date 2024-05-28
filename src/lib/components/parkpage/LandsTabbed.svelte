<script lang="ts">
    import { Tabs } from "bits-ui";
    import Land from "./Land.svelte";
    import Ride from "./Ride.svelte";

    export let lands: Array<any>;
</script>

<Tabs.Root class="md:hidden mx-2">
    <Tabs.List
        class="flex min-h-12 p-1 text-md bg-neutral-800 mb-2 rounded-md gap-1 w-full overflow-x-scroll
            {lands.length < 2 ? 'hidden' : 'block'}"
    >
        {#each lands as land, i (land.id)}
            <Tabs.Trigger
                value={land.id.toString()}
                class="w-full min-w-36 contain-inline-size hyphens-manual break-words py-2 px-4
                text-center rounded-md data-[state=active]:font-medium data-[state=active]:bg-neutral-700
                transition-[background-color, font-weight, padding] duration-300"
            >
                {land.name}
            </Tabs.Trigger>
        {/each}
    </Tabs.List>
    {#each lands as land, i (land.id)}
        <Tabs.Content value={land.id.toString()}>
            <Land {...land}>
                {#each land.rides as ride, i (ride.id)}
                    <Ride {...ride} />
                {/each}
            </Land>
        </Tabs.Content>
    {/each}
</Tabs.Root>
