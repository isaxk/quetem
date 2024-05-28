<script lang="ts">
    import Land from "./Land.svelte";
    import LandsGridColumn from "./LandsGridColumn.svelte";
    import Ride from "./Ride.svelte";

    export let lands: any;

    let column1: Array<any> = [];
    let column2: Array<any> = [];

    $: {
        column1 = [];
        column2 = [];
        lands.forEach((item: any, i: number) => {
            console.log(i);
            if (i % 2 === 0) {
                column1.push(item);
            } else {
                column2.push(item);
            }
        });
    }
</script>

<div
    class="gap-5 hidden md:grid grid-cols-1"
    class:md:grid-cols-2={lands.length > 1}
>
    <LandsGridColumn data={column1} allRides={lands.length < 2} />
    <LandsGridColumn data={column2} allRides={lands.length < 2} />
</div>
