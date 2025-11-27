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
          Executed a complete infrastructure migration for NLVK (Nederlandse Licht en Veiligheidsbrigade),
          transitioning multiple production websites from a legacy Plesk-based hosting environment to a
          modern RunCloud setup on Hetzner servers. The migration aimed to improve performance, reduce
          costs, and provide better management capabilities for the organization's web infrastructure.
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
          <li>Provisioned new Hetzner VPS and configured RunCloud for optimal PHP application hosting</li>
          <li>Backed up all website files, databases, and configurations from the Plesk environment</li>
          <li>Migrated MySQL databases using phpMyAdmin exports and imports, ensuring data integrity</li>
          <li>Transferred website files and reconfigured applications for the new environment</li>
          <li>Updated DNS records to point to the new server infrastructure</li>
          <li>Verified all websites were functioning correctly on the new platform</li>
        </ul>

        <h2 class="text-2xl font-heading mb-3">Challenges Faced</h2>
        <p class="text-zinc-700 mb-4">
          The main challenge was ensuring zero downtime for critical production websites while coordinating
          the DNS cutover. This required careful timing of the migration steps and thorough testing of each
          site before switching DNS records. Database migrations needed special attention to handle character
          encoding differences between the old and new environments, particularly for sites with multilingual
          content. Path differences between Plesk and RunCloud also required configuration adjustments for
          several applications.
        </p>

        <h2 class="text-2xl font-heading mb-3">Results</h2>
        <p class="text-zinc-700 mb-4">
          Successfully migrated all NLVK websites to the new RunCloud/Hetzner infrastructure with minimal
          disruption. The organization now benefits from improved server performance, reduced hosting costs,
          and a more intuitive management interface. The migration also positioned their infrastructure for
          easier scaling and better maintainability going forward.
        </p>
      </div>
    </section>
  );
}
