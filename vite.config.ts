import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/ts/index.tsx"],
            refresh: true,
        }),
        react(),
    ],
});
