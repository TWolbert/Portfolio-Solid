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
        path: "**",
        component: lazy(() => import("./errors/404")),
    },
    {
        path: "/contact",
        component: lazy(() => import("./pages/contact")),
    },
    {
        path: "/projects/goed",
        component: lazy(() => import("./pages/projects/goed")),
    },
];
