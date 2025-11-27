import { setStore } from "@/pages/state/store";
import { A } from "@solidjs/router";
import { onMount } from "solid-js";
import ArrowUpRightIcon from "bootstrap-icons/icons/arrow-up-right.svg";

export default function NotFound() {
    setStore("pageTite", "Page not found...");

    onMount(() => {
        const nav = document.getElementById("nav");
        const footer = document.getElementById("footer");

        nav?.classList.add("from-red-100!");
        footer?.classList.add("from-red-100!");

        setTimeout(() => {
            nav?.classList.remove("from-red-100!");
            footer?.classList.remove("from-red-100!");
        }, 2000);
    });
    return (
        <section class="flex items-start justify-center xl:px-[20%] mt-[20vh] flex-col gap-5 p-3">
            <span class="text-3xl font-heading ">
                Unless you know more than I do, that page doesn't exist.
            </span>
            <p>
                I might have messed up a route, or you may have been snooping
                around. All I know is that I don't have this page in my{" "}
                <A
                    href="https://github.com/TWolbert/Portfolio-Solid/blob/main/src/routes.ts"
                    target="_blank"
                >
                    <code class=" font-mono text-white bg-black rounded-md p-1">
                        routes.ts
                        <ArrowUpRightIcon class="inline ml-3" />
                    </code>
                </A>
                . If you believe you've found a bug please let me know thru the{" "}
                <A href="/contact" class="text-blue-500 hover:underline">
                    contact form
                </A>
                .
            </p>
            <A href="/" class="text-blue-500 hover:underline">
                Take me back!
            </A>
        </section>
    );
}
