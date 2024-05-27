<script>
    import { AngleLeftOutline } from "flowbite-svelte-icons";
    import "../app.css";
</script>

<main class="max-w-screen-md m-auto py-5 px-4">
    <slot />
</main>

<footer class="h-20 flex items-center">
    <div class="text-neutral-400 w-full flex justify-center gap-6">
        <div>
            <!-- <span class="hidden sm:inline">Copyright</span> -->
            Copyright &copy; <a href="https://www.isaxk.com">isaxk.com</a>
        </div>
        <!-- <div>
            <span class="hidden sm:inline">Powered by </span>
            <a href="https://www.queue-times.com">queue-times.com</a>
        </div>
        <div>
            <span class="hidden sm:inline">Project on</span>
            <a href="https://github.com/isaxk/quetem">GitHub</a>
        </div> -->
    </div>
</footer>
