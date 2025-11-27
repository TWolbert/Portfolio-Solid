import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";
import Home from "./pages/home";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: lazy(() => import("./pages/about")),
    },
    {
        path: "/contact",
        component: lazy(() => import("./pages/contact")),
    },
    {
        path: "/blog",
        component: lazy(() => import("./pages/blog")),
    },
    {
        path: "/blog/building-cerebras-php-client",
        component: lazy(() => import("./pages/blog/building-cerebras-php-client")),
    },
    {
        path: "/blog/building-goed-email",
        component: lazy(() => import("./pages/blog/building-goed-email")),
    },
    {
        path: "/blog/why-artix-linux",
        component: lazy(() => import("./pages/blog/why-artix-linux")),
    },
    {
        path: "/projects/goed",
        component: lazy(() => import("./pages/projects/goed")),
    },
    {
        path: "/projects/cerebras-php",
        component: lazy(() => import("./pages/projects/cerebras-php")),
    },
    {
        path: "/projects/dekenner",
        component: lazy(() => import("./pages/projects/dekenner")),
    },
    {
        path: "/projects/kerstzwolle",
        component: lazy(() => import("./pages/projects/kerstzwolle")),
    },
    {
        path: "/projects/runcloud-migration",
        component: lazy(() => import("./pages/projects/runcloud-migration")),
    },
    {
        path: "/projects/this",
        component: lazy(() => import("./pages/projects/this")),
    },
    {
        path: "/admin",
        component: lazy(() => import("./pages/admin")),
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404")),
    },
];
