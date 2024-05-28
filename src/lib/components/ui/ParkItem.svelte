<script lang="ts">
    import { AngleRightOutline } from "flowbite-svelte-icons";

    export let id: number;
    export let name: string;
</script>

<a
    href="/park/{id}"
    class="flex items-center p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800
        rounded-md transition-colors"
>
    <div class="block w-full px-2 py-2 text-lg">
        {name}
    </div>
    <div class="">
        <AngleRightOutline />
    </div>
</a>
<div
    class="border-b-2 border-neutral-200 dark:border-neutral-800 h-1 my-1 last:border-b-0"
></div>
