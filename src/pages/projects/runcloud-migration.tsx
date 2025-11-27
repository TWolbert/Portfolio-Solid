import { createEffect } from "solid-js";
import { setStore } from "../state/store";

export default function RunCloudMigration() {
  createEffect(() => {
    setStore("pageTite", "RunCloud Migration for NLVK");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <img
          src="/runcloud.jpg"
          alt="RunCloud Migration"
          class="w-full h-64 object-cover mb-6 rounded-lg"
        />

        <h1 class="text-3xl font-heading mb-4">RunCloud Migration for NLVK</h1>

        <p class="text-lg text-zinc-700 mb-6">
          Worked on migrating a bunch of websites from their old Plesk-based
          environment to a new environment on RunCloud and Hetzner.
        </p>

        <h2 class="text-2xl font-heading mb-3">Overview</h2>
        <p class="text-zinc-700 mb-4">
          Placeholder text about the project overview. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <h2 class="text-2xl font-heading mb-3">Technologies Used</h2>
        <div class="flex flex-wrap gap-2 mb-6">
          {["mysql.png", "plesk.png", "runcloudlogo.png", "phpmyadmin.png"].map(
            (icon) => (
              <img
                src={`/${icon}`}
                alt=""
                class="size-12 rounded border border-zinc-200 object-contain p-1 bg-white"
              />
            ),
          )}
        </div>

        <h2 class="text-2xl font-heading mb-3">Migration Process</h2>
        <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2">
          <li>Placeholder migration step one</li>
          <li>Placeholder migration step two</li>
          <li>Placeholder migration step three</li>
          <li>Placeholder migration step four</li>
        </ul>

        <h2 class="text-2xl font-heading mb-3">Challenges Faced</h2>
        <p class="text-zinc-700 mb-4">
          Placeholder text about challenges during migration. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>

        <h2 class="text-2xl font-heading mb-3">Results</h2>
        <p class="text-zinc-700 mb-4">
          Placeholder text about the successful results of the migration. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
}
