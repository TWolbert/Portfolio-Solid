import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import { setStore } from "../state/store";

export default function About() {
  createEffect(() => {
    setStore("pageTite", "About");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <div class="bg-white rounded-xl shadow-md p-8 mb-6">
        <h1 class="text-4xl font-heading mb-6">About Me</h1>

        <div class="prose prose-zinc max-w-none">
          <p class="text-lg text-zinc-600 mb-6 leading-relaxed">
            Hi, I'm Teun Wolbert, a full-stack developer passionate about building modern, efficient web applications.
            I love working with cutting-edge technologies and creating solutions that are both powerful and elegant.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">What I Do</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            I specialize in full-stack web development, working across the entire technology stack from frontend interfaces
            to backend APIs and infrastructure. I'm particularly interested in modern JavaScript frameworks, PHP development,
            and creating seamless user experiences.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Technologies & Tools</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 class="font-heading mb-2">Frontend</h3>
              <ul class="text-sm text-zinc-600 space-y-1">
                <li>SolidJS</li>
                <li>JavaScript/TypeScript</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
            <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 class="font-heading mb-2">Backend</h3>
              <ul class="text-sm text-zinc-600 space-y-1">
                <li>PHP/Laravel</li>
                <li>ElysiaJS</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 class="font-heading mb-2">Tools</h3>
              <ul class="text-sm text-zinc-600 space-y-1">
                <li>Docker</li>
                <li>Git</li>
                <li>Artix Linux</li>
              </ul>
            </div>
            <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 class="font-heading mb-2">Databases</h3>
              <ul class="text-sm text-zinc-600 space-y-1">
                <li>MySQL/MariaDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 class="font-heading mb-2">Infrastructure</h3>
              <ul class="text-sm text-zinc-600 space-y-1">
                <li>RunCloud</li>
                <li>Hetzner</li>
                <li>Server Management</li>
              </ul>
            </div>
            <div class="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
              <h3 class="font-heading mb-2">Development</h3>
              <ul class="text-sm text-zinc-600 space-y-1">
                <li>Zed Editor</li>
                <li>Hyprland</li>
                <li>runit</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-heading mt-8 mb-4">My Approach</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            I believe in writing clean, maintainable code that follows best practices. I'm a strong advocate for the Unix philosophy
            of simplicity and modularity, which is reflected in both my system setup (Artix Linux with runit) and my development approach.
            I prefer lean, efficient solutions over bloated frameworks, and I always strive to understand the tools I use at a fundamental level.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Featured Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <A
              href="/projects/goed"
              class="bg-zinc-50 rounded-lg p-4 border border-zinc-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 class="font-heading text-lg mb-2">Goed. email</h3>
              <p class="text-sm text-zinc-600">
                Privacy-focused email service with modern web interface and robust backend infrastructure.
              </p>
            </A>
            <A
              href="/projects/cerebras-php"
              class="bg-zinc-50 rounded-lg p-4 border border-zinc-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 class="font-heading text-lg mb-2">Cerebras PHP</h3>
              <p class="text-sm text-zinc-600">
                Open-source PHP client library for Cerebras AI API with streaming support.
              </p>
            </A>
            <A
              href="/projects/kerstzwolle"
              class="bg-zinc-50 rounded-lg p-4 border border-zinc-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 class="font-heading text-lg mb-2">Kerstzwolle</h3>
              <p class="text-sm text-zinc-600">
                Christmas event website with registration system and email integration.
              </p>
            </A>
            <A
              href="/projects/this"
              class="bg-zinc-50 rounded-lg p-4 border border-zinc-200 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h3 class="font-heading text-lg mb-2">This Portfolio</h3>
              <p class="text-sm text-zinc-600">
                Built with SolidJS and ElysiaJS, showcasing modern web development practices.
              </p>
            </A>
          </div>

          <h2 class="text-2xl font-heading mt-8 mb-4">Get in Touch</h2>
          <p class="text-zinc-700 mb-6 leading-relaxed">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind,
            want to discuss technology, or just want to say hi, feel free to reach out!
          </p>

          <A
            href="/contact"
            class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-6 py-3 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
          >
            <i class="bi bi-envelope-fill" />
            Contact Me
          </A>
        </div>
      </div>
    </section>
  );
}
