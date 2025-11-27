import { createEffect } from "solid-js";
import { CustomNavIcon } from "../../app";
import { setStore } from "../state/store";

export default function DeKenner() {
  createEffect(() => {
    setStore("pageTite", "De Kenner");
  });

  return (
    <>
      <CustomNavIcon href="https://dekenner.nl" src="/dekenner.png" />
      <section class="xl:px-[20%] px-3 py-8">
        <div class="bg-white rounded-xl shadow-md p-6 mb-6">
          <img
            src="/dekenner.png"
            alt="De Kenner"
            class="w-full h-64 object-cover mb-6 rounded-lg"
          />

          <h1 class="text-3xl font-heading mb-4">
            'De kenner' Professional Cyclist Competition Site
          </h1>

          <p class="text-lg text-zinc-700 mb-6">
            A website where you can put together a team, and compete against
            other participants to see if your team performed the best.
          </p>

          <h2 class="text-2xl font-heading mb-3">Overview</h2>
          <p class="text-zinc-700 mb-4">
            Placeholder text about the project overview. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>

          <h2 class="text-2xl font-heading mb-3">Technologies Used</h2>
          <div class="flex flex-wrap gap-2 mb-6">
            {[
              "laravel.png",
              "mariadb.png",
              "lando.svg",
              "php.png",
              "javascript.png",
              "codex.png",
            ].map((icon) => (
              <img
                src={`/${icon}`}
                alt=""
                class="size-12 rounded border border-zinc-200 object-contain p-1 bg-white"
              />
            ))}
          </div>

          <h2 class="text-2xl font-heading mb-3">Key Features</h2>
          <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2">
            <li>Placeholder feature one</li>
            <li>Placeholder feature two</li>
            <li>Placeholder feature three</li>
            <li>Placeholder feature four</li>
          </ul>

          <h2 class="text-2xl font-heading mb-3">Development Process</h2>
          <p class="text-zinc-700 mb-4">
            Placeholder text about the development process. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>

          <h2 class="text-2xl font-heading mb-3">Competition Mechanics</h2>
          <p class="text-zinc-700 mb-4">
            Placeholder text about how the competition works. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>

          <div class="mt-8">
            <a
              href="https://dekenner.nl"
              target="_blank"
              class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
            >
              <i class="bi bi-box-arrow-up-right" />
              Visit De Kenner
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
