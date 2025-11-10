// src/components/Loader.tsx
import { type Component, type JSX, splitProps } from "solid-js";

type LoaderVariant = "spinner" | "dots" | "bar";

type LoaderProps = {
	variant?: LoaderVariant;
	size?: number | string; // px or any CSS length (e.g., "2rem")
	color?: string; // CSS color
	speed?: number; // ms per cycle
	class?: string;
} & Omit<JSX.HTMLAttributes<HTMLDivElement>, "class">;

const Loader: Component<LoaderProps> = (props) => {
	const [local, rest] = splitProps(
		{
			variant: "spinner",
			size: 24,
			color: "currentColor",
			speed: 900,
			class: "",
			...props,
		},
		["variant", "size", "color", "speed", "class"],
	);

	const sizePx = () =>
		typeof local.size === "number" ? `${local.size}px` : local.size;

	return (
		<div
			class={`loader ${local.variant} ${local.class}`.trim()}
			style={{
				"--loader-size": sizePx(),
				"--loader-color": local.color,
				"--loader-speed": `${local.speed}ms`,
			}}
			{...rest}
		>
			{/* Structure varies by variant for accessibility */}
			{local.variant === "spinner" && (
				<div class="loader-spinner" role="status" aria-label="Loading" />
			)}
			{local.variant === "dots" && (
				<div class="loader-dots" role="status" aria-label="Loading">
					<span />
					<span />
					<span />
				</div>
			)}
			{local.variant === "bar" && (
				<div class="loader-bar" role="status" aria-label="Loading">
					<span />
				</div>
			)}
		</div>
	);
};

export default Loader;
