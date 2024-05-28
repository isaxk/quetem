<script lang="ts">
    import { Tabs } from "bits-ui";
    import Land from "./Land.svelte";
    import Ride from "./Ride.svelte";
    import UiTabs from "../ui/UiTabs.svelte";
    import { type LandType } from "$lib/types";

    export let lands: Array<any>;
</script>
