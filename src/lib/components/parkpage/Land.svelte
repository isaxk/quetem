<script lang="ts">
    import { fade, slide } from "svelte/transition";

    export let name: string;
    export let allRides: boolean = false;
</script>

<div class="border-2 border-neutral-700 rounded-md h-max">
    <div
        class="text-xl font-medium py-3 px-6 bg-neutral-800 rounded-t-md hidden md:block"
    >
        {allRides ? "All Attractions" : name}
    </div>
    <div class="py-2 px-5">
        <slot />
    </div>
</div>
