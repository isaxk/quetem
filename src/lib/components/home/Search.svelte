<script lang="ts">
    export let value: string;
</script>

<div class="">
    <input
        type="text"
        bind:value
        placeholder="Find a park..."
        class="w-full bg-neutral-900 border-2 border-neutral-700 rounded-md text-xl px-6 py-3
        outline-none outline-2 outline-offset-0 focus:border-cyan-600 focus:outline-cyan-950
        transition-all"
    />
</div>
