import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
    content: [
        "./resources/views/application.blade.php",
        "./resources/ts/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [animatePlugin],
} satisfies Config;
