import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ command, mode, isSsrBuild }) => ({
    plugins: [
        devtools(),
        solidPlugin(),
        solidSvg({
            defaultAsComponent: true,
            svgo: {
                enabled: true,
            },
        }),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
    server: {
        port: 8000,
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    base: "./",
    build: {
        target: "esnext",
        outDir: "api/public",
        sourcemap: false,
        emptyOutDir: !isSsrBuild, // Don't clear directory during SSR build
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
}));
