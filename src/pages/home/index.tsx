import Accordion from "../../components/Accordion";
import { A } from "@solidjs/router";
import { type Component, createEffect, type JSXElement } from "solid-js";
import { setStore } from "../state/store";

// Using Bootstrap Icons CSS classes instead of SVG imports

export default function Home() {
    createEffect(() => {
        setStore("pageTitle", "Home");
    });

    return (
        <>
            <section class="xl:px-[20%] px-3 min-h-[55vh]" id="lander">
                <div class="grid grid-cols-1 xl:grid-cols-2 xl:mt-40 mt-5 items-center justify-around">
                    <div>
                        <h1 class="text-2xl font-heading text-center xl:text-left">
                            Hi, I'm Teun Wolbert
                        </h1>
                        <p class=" tracking-wide mt-2">
                            I am a software developer from the Netherlands, I
                            specialise in web development, where I do everything
                            from writing frontends like the one you're looking
                            at; to deploying my own web servers and managing my
                            own CI/CD
                        </p>
                        <p class=" tracking-wide mt-2">
                            I have taught myself a lot of different
                            technologies, on the right here you will have a very
                            non-exhaustive list of the tools I've used in my
                            carreer.
                        </p>
                        <div class="mt-5  xl:mb-0 grid xl:grid-cols-3 grid-cols-1 gap-3">
                            <A
                                href="/blog"
                                class="bg-zinc-300 text-black/70 font-heading px-3 py-2 rounded-xl flex gap-2 items-center hover:bg-zinc-400 active:scale-95 transition-all duration-100"
                            >
                                <i class="bi-newspaper text-base" />
                                Read my blog
                            </A>
                            <A
                                href="/contact"
                                class="bg-zinc-300 text-black/70 font-heading px-3 py-2 rounded-xl flex gap-2 items-center hover:bg-zinc-400 active:scale-95 transition-all duration-100"
                            >
                                <i class="bi-person-fill text-base" />
                                Get in contact
                            </A>
                            <A
                                href="#projects"
                                class="bg-blue-500 text-white font-heading px-3 py-2 rounded-xl flex gap-2 items-center hover:bg-blue-600 active:scale-95 transition-all duration-100"
                            >
                                <i class="bi-arrow-right text-base" />
                                See my projects
                            </A>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-1 px-auto mx-auto xl:mx-0 xl:ml-auto p-3 *:border-collapse w-fit relative">
                        <div class="absolute size-16 bg-blue-200 blur-xl top-10 right-20" />
                        <div class="absolute size-16 bg-blue-500 blur-xl top-20 left-20" />
                        <div class="absolute size-16 bg-blue-300 blur-xl bottom-20 right-20" />
                        <div class="absolute size-16 bg-blue-600 blur-xl left-10 bottom-20" />
                        <LogoBadge
                            src="/laravel.png"
                            url="https://laravel.com"
                        />
                        <LogoBadge src="/php.png" url="https://www.php.net" />
                        <LogoBadge src="/react.svg" url="https://react.dev" />
                        <LogoBadge
                            src="/typescript.png"
                            hoverSrc="/javascript.png"
                            url="https://www.typescriptlang.org"
                        />
                        <LogoBadge
                            src="/bun.svg"
                            hoverSrc="/node.svg"
                            url="https://bun.sh"
                        />
                        <LogoBadge
                            src="/docker.png"
                            url="https://www.docker.com"
                        />
                        <LogoBadge
                            src="/tailwindcss.png"
                            hoverSrc="/css.png"
                            url="https://tailwindcss.com"
                        />
                        <LogoBadge
                            src="/solid.svg"
                            url="https://www.solidjs.com"
                        />
                        <LogoBadge
                            src="/csharp.png"
                            url="https://learn.microsoft.com/dotnet/csharp/"
                        />
                        <LogoBadge
                            src="/elysia.svg"
                            url="https://elysiajs.com"
                        />
                        <LogoBadge
                            src="/caddy.png"
                            hoverSrc="/nginx.png"
                            url="https://caddyserver.com"
                        />
                        <LogoBadge src="/nextjs.png" url="https://nextjs.org" />
                        <LogoBadge
                            src="/mariadb.png"
                            hoverSrc="/mysql.png"
                            url="https://mariadb.org"
                        />
                        <LogoBadge
                            src="/redis.svg"
                            hoverSrc="/valkey.png"
                            url="https://redis.io"
                        />
                        <LogoBadge src="/coolify.png" url="https://coolify.io" />
                        <LogoBadge
                            src="/linux.png"
                            hoverSrc="/arch.png"
                            url="https://www.kernel.org"
                        />
                    </div>
                </div>
            </section>
            <section class="xl:px-[20%] px-3" id="projects">
                <div class="mt-20">
                    <h1 class="text-2xl font-heading pt-5">
                        Projects I have worked on
                    </h1>
                    <p class="mt-2 mb-5">
                        I have worked on a lot of things, partly for companies
                        thru internships, and partly just things I've developed
                        on my own.
                    </p>
                    <div class="grid grid-cols- xl:grid-cols-3 gap-5">
                        <ProjectCard
                            href="/projects/goed"
                            name="Goed. Email"
                            imageSrc="/goed-slogan.png"
                            logoIcons={[
                                "/laravel.png",
                                "/php.png",
                                "/tailwindcss.png",
                                "/valkey.png",
                                "/mariadb.png",
                                "/docker.png",
                                "/caddy.png",
                                "/bun.svg",
                                "/composer.jpg",
                                "/cerebras-small.png",
                            ]}
                            shortText="Your next e-mail client. Designed with performance in mind, encrypted by default."
                        />
                        <ProjectCard
                            href="/projects/cerebras-php"
                            name="Cerebras PHP"
                            imageSrc="/cerebras.png"
                            logoIcons={["/php.png", "/composer.jpg"]}
                            shortText="An open-source custom PHP adapter for the Cerebras fast inference platform."
                        />
                        <ProjectCard
                            href="/projects/this"
                            name="This portfolio"
                            imageSrc="/codescreenshot.png"
                            logoIcons={[
                                "/elysia.svg",
                                "/solid.svg",
                                "/typescript.png",
                                "/mariadb.png",
                                "/valkey.png",
                                "/zed.png",
                                "/artix.png",
                            ]}
                            shortText="Pictured is some code from this website"
                        />
                        <ProjectCard
                            href="/projects/kerstzwolle"
                            name="Inschrijven Kerstzwolle"
                            imageSizing="object-cover"
                            imageSrc="/kerstzwolle.png"
                            logoIcons={[
                                "/laravel.png",
                                "/mariadb.png",
                                "/lando.svg",
                                "/php.png",
                                "/javascript.png",
                                "/codex.png",
                            ]}
                            shortText="A website for a volunteer team that makes christmas boxes for households in Zwolle, the Netherlands"
                        />
                        <ProjectCard
                            href="/projects/runcloud-migration"
                            name="RunCloud migration for NLVK"
                            imageSizing="object-cover"
                            imageSrc="/runcloud.jpg"
                            logoIcons={[
                                "/mysql.png",
                                "/plesk.png",
                                "/runcloudlogo.png",
                                "/phpmyadmin.png",
                            ]}
                            shortText="Worked on migrating a bunch of websites from their old Plesk-based environment to a new environment on RunCloud and Hetzner"
                        />
                        <ProjectCard
                            href="/projects/dekenner"
                            name="'De kenner' professional cyclist competition site "
                            imageSrc="/dekenner.png"
                            imageSizing="object-cover"
                            logoIcons={[
                                "/laravel.png",
                                "/mariadb.png",
                                "/lando.svg",
                                "/php.png",
                                "/javascript.png",
                                "/codex.png",
                            ]}
                            shortText="A website where you can put together a team, and compete against other participants to see if your team performend the best."
                        />
                    </div>
                </div>
            </section>
            <section class="xl:px-[20%] p-3" id="techilike">
                <div class="mt-20">
                    <h1 class="text-2xl font-heading">
                        Tech I currently really enjoy
                    </h1>
                    <p class="mt-2 mb-5">
                        I couldn't really think of another spot to put this,
                        below is a list of really cool apps, frameworks and
                        other tech related stuff that's caught my eye.
                    </p>
                    <div class="flex flex-col gap-2">
                        <Accordion collapseBehavior="hide">
                            <InterestCard
                                coverText="Zen Browser"
                                src="/zen.png"
                                content={
                                    <>
                                        <span class=" italic text-zinc-500">
                                            Zen Browser is a modern web-browser,
                                            I like it for it's clean and modern
                                            interface, and "Zen Mods"; which are
                                            neat little extensions to the
                                            browser UI
                                        </span>
                                        <br />
                                        <br />
                                        <h1 class="text-xl font-heading">
                                            I use this browser to develop this
                                            website
                                        </h1>
                                        It's literally the perfect browser in my
                                        opinion, don't hesitate to give it a
                                        shot, it's just that good.
                                    </>
                                }
                            />
                            <InterestCard
                                coverText="Zed Code Editor"
                                src="/zed.png"
                                content={
                                    <>
                                        <span class=" italic text-zinc-500">
                                            Zed is a modern VSCode/JetBrains
                                            alternative written in Rust, the
                                            website you are viewing right now
                                            was written entirely by hand in Zed.
                                        </span>
                                        <br />
                                        <br />
                                        <h1 class="text-xl font-heading">
                                            Features
                                        </h1>
                                        Below I will list some features of Zed
                                        that I enjoy
                                        <br />
                                        <br />
                                        <h3 class="font-heading">Extensions</h3>
                                        Whilst not yet as extensive as other
                                        editors like VSCode, Zed supports
                                        extensions for theming, language
                                        servers, icons and more
                                        <img
                                            src="/zed-extensions.png"
                                            class="rounded-md shadow"
                                        />
                                        <br />
                                        <br />
                                        <h3 class="font-heading">
                                            Simplified built in terminal
                                        </h3>
                                        As opposed to VSCode, the integrated
                                        terminal in Zed is snappy, easy to look
                                        at, and doesn't come with too many dials
                                        and buttons; which is a feature not a
                                        bug. It makes it so I spend less time
                                        searching what I want to do and more
                                        time actually doing it
                                        <img
                                            src="/zed-terminal.png"
                                            class="rounded-md shadow"
                                        />
                                    </>
                                }
                            />
                            <InterestCard
                                coverText="The ElysiaJS Framework"
                                src="/elysia.svg"
                                content={
                                    <>
                                        <span class=" italic text-zinc-500">
                                            Ergonomic Framework for Humans
                                            TypeScript with End-to-End Type
                                            Safety, type integrity, and
                                            exceptional developer experience.
                                            Supercharged by Bun.
                                        </span>
                                        <br />
                                        <br />
                                        <h1 class="text-xl font-heading">
                                            Stupid fast TypeScript alternative
                                            to ExpressJS
                                        </h1>
                                        This is used for the API and serving
                                        functions of this website, it's fast
                                        enough as to where my benchmarking tools
                                        can't really keep up. It's nice to use,
                                        easy to extend, and very easy to
                                        understand.
                                    </>
                                }
                            />
                            <InterestCard
                                coverText="Artix Linux"
                                src="/artix.png"
                                content={
                                    <>
                                        <span class=" italic text-zinc-500">
                                            The Art of Linux Simple. Fast.
                                            Systemd-free.
                                        </span>
                                        <br />
                                        <br />
                                        <h1 class="text-xl font-heading">
                                            I stopped distro-hopping because of
                                            Artix
                                        </h1>
                                        Artix is a clean and elegant solution to
                                        the everyday problem of 'my computer
                                        just isn't starting fast enough'. And
                                        although that's obviously not a serious
                                        issue, it's something I enjoy optimizing
                                        for.
                                        <br />
                                        Below a screenhshot of how I customised
                                        my Hyprland environment
                                        <img
                                            src="/artix-screenshot.png"
                                            class="rounded-md shadow"
                                        />
                                    </>
                                }
                            />
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    );
}

export const InterestCard: Component<{
    coverText: string;
    src: string;
    content: JSXElement;
}> = (props) => {
    return (
        <Accordion.Item>
            <h1>
                <Accordion.Trigger class="flex gap-2 items-center bg-white w-full p-3 rounded-xl shadow cursor-pointer hover:bg-zinc-50 transition active:scale-95 duration-100">
                    <img
                        src={props.src}
                        class="size-8 object-contain border rounded-xl p-1 shadow bg-white"
                    />
                    <h2 class="font-heading tracking-wide">
                        {props.coverText}
                    </h2>
                </Accordion.Trigger>
            </h1>

            {/* Add animation classes and overflow handling like component 1 */}
            <Accordion.Content class="overflow-hidden data-expanded:animate-expand data-collapsed:animate-collapse bg-white p-3 rounded-xl shadow">
                {props.content}
                <Accordion.Trigger class="bg-blue-500 text-white font-heading px-3 py-2 hover:bg-blue-600 active:scale-95 rounded-xl mt-2 flex items-center gap-2">
                    <i class="bi-x-lg text-base" />
                    <span>Close {props.coverText}</span>
                </Accordion.Trigger>
            </Accordion.Content>
        </Accordion.Item>
    );
};

export const ProjectCard: Component<{
    name: string;
    imageSizing?: string;
    imageSrc: string;
    logoIcons: string[];
    shortText: string;
    href: string;
}> = (props) => {
    return (
        <A
            href={props.href}
            class="group block overflow-hidden rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            <article>
                <div class="relative aspect-video w-full overflow-hidden bg-zinc-100">
                    <img
                        src={props.imageSrc}
                        alt={props.name}
                        class={
                            "h-full w-full transition-transform duration-300 group-hover:scale-105 " +
                            (props.imageSizing ?? "object-contain")
                        }
                        loading="lazy"
                    />
                    <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:backdrop-blur-sm group-hover:opacity-100" />
                </div>

                <div class="p-4 flex flex-col gap-3">
                    <h3 class="text-lg font-heading tracking-wide">{props.name}</h3>
                    <p class="text-sm text-zinc-700 leading-relaxed">
                        {props.shortText}
                    </p>

                    <div class="mt-1 flex flex-wrap items-center gap-2">
                        {props.logoIcons.map((icon) => (
                            <img
                                src={icon}
                                alt=""
                                class="size-6 rounded border border-zinc-200 object-contain p-0.5 bg-white hover:scale-110 transition-all duration-100"
                                loading="lazy"
                            />
                        ))}
                    </div>

                    <div class="mt-2 flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                        <i class="bi-arrow-right-short text-base" />
                        <span class="text-sm text-zinc-600">Learn more</span>
                    </div>
                </div>
            </article>
        </A>
    );
};

export const LogoBadge: Component<{
    src: string;
    hoverSrc?: string;
    url: string;
}> = (props) => {
    const base =
        "border-1 border-zinc-200 rounded-md p-2 size-20 xl:size-26 aspect-square object-contain bg-zinc-50/50 backdrop-blur-sm group-hover:bg-zinc-200/50";

    return (
        <A
            href={props.url}
            target="_blank"
            class="relative inline-block size-20 xl:size-26 group transition-transform duration-100 group-hover:scale-110"
        >
            {props.hoverSrc && (
                <img
                    src={props.hoverSrc}
                    aria-hidden="true"
                    class={`${base} absolute inset-0 transition-opacity duration-150 opacity-0 group-hover:opacity-100`}
                />
            )}

            <img
                src={props.src}
                class={`${base} relative z-10 transition-opacity duration-150  ${
                    props.hoverSrc ? "group-hover:opacity-0" : ""
                }`}
            />
        </A>
    );
};
