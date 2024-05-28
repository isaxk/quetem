<script lang="ts">
    export let title: string;
</script>

<div
    class="border-2 border-neutral-300 dark:border-neutral-700 rounded-md h-max"
>
    <div
        class="text-xl font-medium py-3 px-6 bg-neutral-800 rounded-t-md hidden"
    >
        {title}
    </div>
    <div class="py-2 px-5">
        <slot />
    </div>
</div>
