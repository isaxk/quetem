<script lang="ts">
    import { Tabs } from "bits-ui";
    import { SvelteComponent } from "svelte";

    export let tabs: {
        title: string;
        icon?: typeof SvelteComponent<any>;
        iconProps?: any;
        content: typeof SvelteComponent<any>;
        props?: any;
    }[];

    console.log(tabs);
</script>

<Tabs.Root>
    <Tabs.List
        class="min-h-12 p-1 text-md bg-neutral-200 dark:bg-neutral-800 mb-2 rounded-md gap-1 w-full overflow-x-scroll
        {tabs.length < 2 ? 'hidden' : 'flex'}"
    >
        {#each tabs as tab}
            <Tabs.Trigger
                value={tab.title}
                class="flex max-h-16 text-ellipsis items-center justify-center gap-1 w-full min-w-36 contain-inline-size hyphens-manual break-words py-2 px-4
        text-center rounded-md data-[state=active]:font-medium data-[state=active]:bg-white data-[state=active]:dark:bg-neutral-700
        transition-[background-color, font-weight, padding] duration-300"
            >
                {#if tab.icon}
                    <svelte:component this={tab.icon} {...tab.iconProps} />
                {/if}
                <div class="">
                    {tab.title.length > 25
                        ? tab.title.substring(0, 25) + "..."
                        : tab.title}
                </div>
            </Tabs.Trigger>
        {/each}
    </Tabs.List>
    {#each tabs as tab}
        <Tabs.Content value={tab.title}>
            <svelte:component this={tab.content} {...tab.props} />
        </Tabs.Content>
    {/each}
</Tabs.Root>
