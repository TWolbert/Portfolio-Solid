import type { RouteDefinition } from "@solidjs/router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BuildingCerebrasPhpClient from "./pages/blog/building-cerebras-php-client";
import BuildingGoedEmail from "./pages/blog/building-goed-email";
import WhyArtixLinux from "./pages/blog/why-artix-linux";
import Goed from "./pages/projects/goed";
import CerebrasPhp from "./pages/projects/cerebras-php";
import Dekenner from "./pages/projects/dekenner";
import Kerstzwolle from "./pages/projects/kerstzwolle";
import RuncloudMigration from "./pages/projects/runcloud-migration";
import This from "./pages/projects/this";
import Admin from "./pages/admin";
import NotFound from "./errors/404";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/blog/building-cerebras-php-client",
        component: BuildingCerebrasPhpClient,
    },
    {
        path: "/blog/building-goed-email",
        component: BuildingGoedEmail,
    },
    {
        path: "/blog/why-artix-linux",
        component: WhyArtixLinux,
    },
    {
        path: "/projects/goed",
        component: Goed,
    },
    {
        path: "/projects/cerebras-php",
        component: CerebrasPhp,
    },
    {
        path: "/projects/dekenner",
        component: Dekenner,
    },
    {
        path: "/projects/kerstzwolle",
        component: Kerstzwolle,
    },
    {
        path: "/projects/runcloud-migration",
        component: RuncloudMigration,
    },
    {
        path: "/projects/this",
        component: This,
    },
    {
        path: "/admin",
        component: Admin,
    },
    {
        path: "**",
        component: NotFound,
    },
];
