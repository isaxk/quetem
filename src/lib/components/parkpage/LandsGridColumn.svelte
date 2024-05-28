<script lang="ts">
    import Land from "./Land.svelte";
    import Ride from "./Ride.svelte";

    export let data: Array<any>;
    export let allRides: boolean = false;
</script>

<div class="flex flex-col justify-stretch gap-5">
    {#each data as land, i (land.id)}
        <Land {...land} {allRides}>
            {#each land.rides as ride, i (ride.id)}
                <Ride {...ride} />
            {/each}
        </Land>
    {/each}
</div>
