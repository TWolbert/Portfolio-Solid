import { A, useLocation } from "@solidjs/router";
import {
    type Component,
    createEffect,
    createSignal,
    type JSXElement,
} from "solid-js";
import { isServer, Portal } from "solid-js/web";
import { store } from "./pages/state/store";

const App: Component<{ children: JSXElement }> = (props) => {
    return (
        <div class="min-h-screen bg-zinc-100 flex flex-col">
            <nav
                id="nav"
                class="sticky top-0 z-50 border-b-2 border-zinc-200 py-4 bg-gradient-to-b from-blue-100 to-zinc-100 backdrop-blur-sm px-5 xl:px-[20%] shadow-sm"
            >
                <div class="flex justify-between items-center w-full">
                    <div class="flex items-center gap-3">
                        <A
                            href="/"
                            class="flex items-center gap-2 hover:opacity-80 transition-opacity"
                        >
                            <div class="bg-blue-500 text-white size-8 rounded-xl flex items-center justify-center font-heading font-bold">
                                TW
                            </div>
                            <span class="hidden sm:block text-xl font-heading text-zinc-800">
                                Teun Wolbert
                            </span>
                        </A>
                        <span class="hidden md:inline text-zinc-400">|</span>
                        <span class="hidden md:inline text-base font-heading text-zinc-600">
                            {store.pageTitle}
                        </span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <div id="customNavIcon"></div>
                        <NavLink icon="bi-house-fill" href="/" label="Home" />
                        <NavLink icon="bi-newspaper" href="/blog" label="Blog" />
                        <NavLink icon="bi-info-circle-fill" href="/about" label="About" />
                        <NavLink icon="bi-person-fill" href="/contact" label="Contact" />
                    </div>
                </div>
            </nav>

            <main class="flex-1 min-h-0">
                {props.children}
            </main>

            <footer
                id="footer"
                class="xl:px-[20%] px-5 mt-5 py-12 bg-gradient-to-t from-blue-100 to-zinc-100 border-t-2 border-zinc-200"
            >
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 class="font-heading text-lg mb-3">Teun Wolbert</h3>
                        <p class="text-sm text-zinc-600 leading-relaxed">
                            Full-stack developer passionate about building modern web applications with clean, efficient code.
                        </p>
                    </div>

                    <div>
                        <h3 class="font-heading text-lg mb-3">Quick Links</h3>
                        <nav class="flex flex-col gap-2 text-sm">
                            <A href="/" class="text-zinc-600 hover:text-blue-600 transition-colors">Home</A>
                            <A href="/blog" class="text-zinc-600 hover:text-blue-600 transition-colors">Blog</A>
                            <A href="/about" class="text-zinc-600 hover:text-blue-600 transition-colors">About</A>
                            <A href="/contact" class="text-zinc-600 hover:text-blue-600 transition-colors">Contact</A>
                        </nav>
                    </div>

                    <div>
                        <h3 class="font-heading text-lg mb-3">Projects</h3>
                        <nav class="flex flex-col gap-2 text-sm">
                            <A href="/projects/goed" class="text-zinc-600 hover:text-blue-600 transition-colors">Goed. email</A>
                            <A href="/projects/cerebras-php" class="text-zinc-600 hover:text-blue-600 transition-colors">Cerebras PHP</A>
                            <A href="/projects/kerstzwolle" class="text-zinc-600 hover:text-blue-600 transition-colors">Kerstzwolle</A>
                        </nav>
                    </div>
                </div>

                <div class="pt-6 border-t border-zinc-300 text-sm text-zinc-600 space-y-2">
                    <p>© {new Date().getFullYear()} Teun Wolbert. All rights reserved.</p>
                    <p class="text-xs text-zinc-500">
                        Logos on this website may be subject to trademark and copyright laws.
                        The "Goed. email" name and logo are trademark of the WLBT.© company.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export function NavLink(props: {
    href: string;
    icon?: string; // bootstrap icon class
    src?: string; // custom image src
    label?: string;
}) {
    const location = useLocation();
    const [active, setActive] = createSignal(location.pathname == props.href);

    createEffect(() => {
        setActive(location.pathname == props.href);
    });

    const activeClass = () =>
        active()
            ? "bg-blue-500 text-white border-blue-600 scale-105"
            : "bg-white text-zinc-700 border-zinc-300";

    return (
        <A
            href={props.href}
            class={
                "group relative border size-8 flex items-center justify-center rounded-xl hover:bg-blue-400 hover:text-white hover:border-blue-500 active:scale-95 transition-all duration-150 shadow-sm " +
                activeClass()
            }
            title={props.label}
        >
            {props.icon && (
                <i class={`${props.icon} text-base`} />
            )}
            {props.src && (
                <img
                    class="object-contain size-6 aspect-square"
                    src={props.src}
                />
            )}
            {props.label && (
                <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {props.label}
                </span>
            )}
        </A>
    );
}

export function CustomNavIcon({ href, src }: { href: string; src: string }) {
    if (isServer) return null;

    return (
        <Portal mount={document.getElementById("customNavIcon")!}>
            <NavLink href={href} src={src} />
        </Portal>
    );
}

export default App;
