/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Red Hat Display", "sans-serif"],
            },
            translate: {
                tick: "1px",
            },
        },
    },
    darkMode: "media",
    plugins: [],
};
