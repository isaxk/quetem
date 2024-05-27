<script lang="ts">
    import Land from "./Land.svelte";
    import Ride from "./Ride.svelte";

    export let data: any;
</script>

<div
    class="grid-cols-1 gap-5 hidden md:grid w-full"
    class:md:grid-cols-2={data.rides.lands.length > 2}
>
    {#each data.rides.lands as land, i (land.id)}
        <Land {...land} allRides={data.rides.lands.length < 2}>
            {#each land.rides as ride, i (ride.id)}
                <Ride {...ride} />
            {/each}
        </Land>
    {/each}
</div>
