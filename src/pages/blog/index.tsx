import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import { setStore } from "../state/store";

export default function Blog() {
  createEffect(() => {
    setStore("pageTitle", "Blog");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <h1 class="text-3xl font-heading mb-6">Blog</h1>

      <p class="text-lg text-zinc-700 mb-8">
        Welcome to my blog! Here I write about software development, technology,
        and things I'm working on.
      </p>

      <div class="grid gap-6">
        <BlogPostCard
          title="Building a PHP Client for Cerebras AI: Ultra-Fast Inference for PHP Developers"
          date="2025-11-27"
          excerpt="The story of creating goed/cerebras-php, a modern PHP adapter that brings Cerebras's cutting-edge AI capabilities to the PHP world. Learn about the challenges of implementing SSE streaming in PHP and designing an intuitive API."
          slug="building-cerebras-php-client"
        />

        <BlogPostCard
          title="Building Goed.Email: Rethinking Email for the Modern Web"
          date="2025-11-20"
          excerpt="Building a modern email client from scratch with Laravel, Livewire, and AI-powered features. Discover the challenges of implementing email protocols, real-time updates, and creating a lightning-fast, privacy-focused email experience."
          slug="building-goed-email"
        />

        <BlogPostCard
          title="Why I Switched to Artix Linux: Embracing Init Freedom"
          date="2025-11-15"
          excerpt="After years of using various Linux distributions, I made the switch to Artix Linux and haven't looked back. Discover why init freedom, system simplicity, and the Unix philosophy transformed my development workflow."
          slug="why-artix-linux"
        />
      </div>
    </section>
  );
}

function BlogPostCard(props: {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) {
  return (
    <article class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div class="flex items-center gap-2 text-sm text-zinc-500 mb-2">
        <i class="bi bi-calendar3" />
        <time datetime={props.date}>{props.date}</time>
      </div>

      <h2 class="text-2xl font-heading mb-3 hover:text-blue-600 transition-colors">
        <A href={`/blog/${props.slug}`}>{props.title}</A>
      </h2>

      <p class="text-zinc-700 mb-4">{props.excerpt}</p>

      <A
        href={`/blog/${props.slug}`}
        class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-heading"
      >
        Read more
        <i class="bi bi-arrow-right-short text-xl" />
      </A>
    </article>
  );
}
