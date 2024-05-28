<script lang="ts">
    import { SearchOutline } from "flowbite-svelte-icons";

    export let value: string;
</script>

<div class="relative h-14">
    <input
        type="text"
        bind:value
        placeholder="Find a park..."
        class="absolute w-full bg-neutral-900 border-2 border-neutral-700 rounded-md text-xl pl-11 pr-6 py-3
        outline-none outline-2 outline-offset-0 focus:border-cyan-600 focus:outline-cyan-950
        transition-all"
    />
    <div class="absolute h-full flex items-center pl-4">
        <SearchOutline class="text-neutral-400" />
    </div>
</div>
