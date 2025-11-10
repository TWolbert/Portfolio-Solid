import { A, useLocation } from "@solidjs/router";
import {
    type Component,
    createEffect,
    createSignal,
    type JSXElement,
    Suspense,
} from "solid-js";
import { Portal } from "solid-js/web";
import Loader from "./components/loadingSpinner";
import { store } from "./pages/state/store";

// Import only the SVGs you actually use
import HouseFillIcon from "bootstrap-icons/icons/house-fill.svg";
import NewspaperIcon from "bootstrap-icons/icons/newspaper.svg";
import InfoCircleFillIcon from "bootstrap-icons/icons/info-circle-fill.svg";
import PersonFillIcon from "bootstrap-icons/icons/person-fill.svg";

const App: Component<{ children: JSXElement }> = (props) => {
    return (
        <div class="min-h-screen bg-zinc-100 flex flex-col">
            <nav
                id="nav"
                class="border-b-2 py-4 bg-gradient-to-b from-blue-100 to-zinc-100 px-5 xl:px-[20%] flex transition-all"
            >
                <div class="flex justify-between w-full">
                    <div class="flex items-center justify-center gap-2">
                        <NavLink Icon={HouseFillIcon} href="/" />
                        <span class="text-xl font-heading text-black/70">
                            <span class="hidden xl:inline">
                                Teun Wolbert |{" "}
                            </span>
                            {store.pageTite}
                        </span>
                    </div>
                    <div class="flex gap-3 items-center justify-center">
                        <div id="customNavIcon"></div>
                        <NavLink Icon={NewspaperIcon} href="/blog" />
                        <NavLink Icon={InfoCircleFillIcon} href="/about" />
                        <NavLink Icon={PersonFillIcon} href="/contact" />
                    </div>
                </div>
            </nav>

            <main class="flex-1 min-h-0">
                <Suspense fallback={<Loader />}>{props.children}</Suspense>
            </main>

            <footer
                id="footer"
                class="xl:px-[30%] p-3 mt-5 py-10 bg-gradient-to-t from-blue-100 to-zinc-100 transition-all"
            >
                <div class="p-2 bg-white shadow-md rounded-xl flex flex-col gap-2">
                    <span>Made by Teun Wolbert © All rights reserved.</span>
                    <span>
                        Logos on this website may be subject to trademark and
                        copyright laws.
                    </span>
                    <span>
                        The "Goed. email" name and logo are trademark of the
                        WLBT.© company | 2025
                    </span>
                </div>
            </footer>
        </div>
    );
};

type SvgComponent = (props: {
    class?: string;
    width?: number | string;
    height?: number | string;
    style?: any;
}) => JSXElement;

export function NavLink(props: {
    href: string;
    Icon?: SvgComponent | string;
    src?: string; // keep for CustomNavIcon
}) {
    const location = useLocation();
    const [active, setActive] = createSignal(location.pathname == props.href);

    createEffect(() => {
        setActive(location.pathname == props.href);
    });

    const activeClass = () => (active() ? "scale-110" : "");

    return (
        <A
            href={props.href}
            class={
                "border bg-zinc-100 size-8 flex items-center justify-center rounded-xl border-black/70 hover:bg-zinc-200 active:scale-95 transition-all duration-100 " +
                activeClass()
            }
        >
            {props.Icon && (
                <props.Icon class="size-4" style={{ color: "currentColor" }} />
            )}
            {props.src && (
                <img
                    class="object-contain size-6 aspect-square"
                    src={props.src}
                />
            )}
        </A>
    );
}

export function CustomNavIcon({ href, src }: { href: string; src: string }) {
    return (
        <Portal mount={document.getElementById("customNavIcon")!}>
            <NavLink href={href} src={src} />
        </Portal>
    );
}

export default App;
