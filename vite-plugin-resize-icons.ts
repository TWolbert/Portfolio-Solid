import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import type { Plugin } from "vite";

export function resizeIcons(): Plugin {
	return {
		name: "vite-plugin-resize-icons",
		async closeBundle() {
			const iconsDir = join(process.cwd(), "public", "icons");

			if (!existsSync(iconsDir)) {
				console.log("Icons directory not found, skipping resize");
				return;
			}

			const files = await readdir(iconsDir);
			const imageFiles = files.filter((file) =>
				/\.(png|jpe?g|webp)$/i.test(file),
			);

			console.log(`Resizing ${imageFiles.length} icons to 256x256...`);

			await Promise.all(
				imageFiles.map(async (file) => {
					const filePath = join(iconsDir, file);
					try {
						await sharp(filePath)
							.resize(256, 256, {
								fit: "contain",
								background: { r: 0, g: 0, b: 0, alpha: 0 },
							})
							.toFile(filePath.replace(/(\.[^.]+)$/, "-resized$1"));

						// Replace original with resized
						await sharp(filePath.replace(/(\.[^.]+)$/, "-resized$1")).toFile(
							filePath,
						);

						// Clean up temp file
						const { unlink } = await import("node:fs/promises");
						await unlink(filePath.replace(/(\.[^.]+)$/, "-resized$1"));

						console.log(`✓ Resized ${file}`);
					} catch (error) {
						console.error(`Failed to resize ${file}:`, error);
					}
				}),
			);

			console.log("Icon resizing complete!");
		},
	};
}
