<script>
    import { AngleLeftOutline } from "flowbite-svelte-icons";
    import "../app.css";
</script>

<div class="flex flex-col h-screen w-full max-w-screen-md m-auto">
    <main class="py-5 px-4 flex-grow">
        <slot />
    </main>

    <footer class="py-5 flex items-center border-2 border-red-500">
        <div class="text-neutral-400 w-full flex justify-center gap-6">
            <div>
                <span class="hidden sm:inline">Copyright</span> &copy;
                <a href="https://www.isaxk.com">isaxk.com</a>
            </div>
            <!-- <div>
            <span class="hidden sm:inline">Powered by </span>
            <a href="https://www.queue-times.com">queue-times.com</a>
        </div>
        -->
            <div>
                <span class="inline">Project on</span>
                <a href="https://github.com/isaxk/quetem">GitHub</a>
            </div>
        </div>
    </footer>
</div>
