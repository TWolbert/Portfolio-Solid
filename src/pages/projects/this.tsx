import { createEffect } from "solid-js";
import { setStore } from "../state/store";

export default function ThisPortfolio() {
  createEffect(() => {
    setStore("pageTite", "This Portfolio");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <div class="bg-white rounded-xl shadow-md p-6 mb-6">
        <img
          src="/codescreenshot.png"
          alt="This Portfolio"
          class="w-full h-64 object-contain mb-6 rounded-lg"
        />

        <h1 class="text-3xl font-heading mb-4">This Portfolio</h1>

        <p class="text-lg text-zinc-700 mb-6">
          A modern, high-performance portfolio website built with SolidJS,
          ElysiaJS, and a lightning fast SPA. The website you're currently
          viewing, showcasing projects and technical writing.
        </p>

        <h2 class="text-2xl font-heading mb-3">Overview</h2>
        <p class="text-zinc-700 mb-4">
          This portfolio was built as a platform to showcase projects, share
          technical insights through blog posts, and demonstrate modern web
          development practices. The architecture leverages SolidJS for reactive
          UI rendering with minimal overhead, ElysiaJS for a blazingly fast API
          backend, and a Single Page APP (SPA) for optimal performance.
          Developed entirely on Artix Linux using Zed editor, the project
          emphasizes performance, clean code, and modern development workflows.
          The entire stack runs in a containerized environment using Docker,
          with MariaDB for persistent data and Valkey (Redis fork) for caching
          and session management.
        </p>

        <h2 class="text-2xl font-heading mb-3">Technologies Used</h2>
        <div class="flex flex-wrap gap-2 mb-6">
          {[
            "elysia.svg",
            "solid.svg",
            "typescript.png",
            "mariadb.png",
            "valkey.png",
            "zed.png",
            "artix.png",
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
          <li>SolidJS SPA for best client experience</li>
          <li>ElysiaJS backend API providing ultra-fast response times</li>
          <li>Tailwind CSS v4 for modern, utility-first styling</li>
          <li>
            Fully containerized development and production environment with
            Docker
          </li>
          <li>
            Valkey (Redis fork) for high-performance caching and session storage
          </li>
          <li>MariaDB for reliable persistent data storage</li>
          <li>Image optimization pipeline using Sharp and Vite plugins</li>
          <li>
            Code quality enforcement with Biome for formatting and linting
          </li>
          <li>Type-safe routing with SolidJS Router and Zod validation</li>
          <li>Responsive design optimized for all device sizes</li>
        </ul>

        <h2 class="text-2xl font-heading mb-3">Development Process</h2>
        <p class="text-zinc-700 mb-4">
          The development process prioritized performance and developer
          experience from the start. SolidJS was chosen for its fine-grained
          reactivity and minimal runtime overhead compared to traditional
          virtual DOM frameworks. ElysiaJS powers the backend, providing
          type-safe routing with Zod validation and exceptional performance
          thanks to Bun's optimized runtime. The build pipeline uses Vite for
          fast hot module replacement during development and optimized
          production builds. All development was done on Artix Linux using Zed
          editor, emphasizing a minimal, focused development environment.
        </p>

        <h2 class="text-2xl font-heading mb-3">Challenges & Solutions</h2>
        <p class="text-zinc-700 mb-4">
          Image optimization presented a challenge, solved by implementing a
          multi-stage pipeline using Sharp and Vite plugins that automatically
          compresses and optimizes images during the build process. Balancing
          modern Tailwind CSS v4 features with browser compatibility required
          testing across multiple environments, ultimately resulting in a design
          that works seamlessly everywhere while leveraging cutting-edge CSS
          features.
        </p>

        <h2 class="text-2xl font-heading mb-3">Design Decisions</h2>
        <p class="text-zinc-700 mb-4">
          The technology choices were deliberate and purpose-driven. SolidJS was
          selected over React or Vue for its superior performance
          characteristics and fine-grained reactivity system. ElysiaJS was
          chosen for the backend due to its type safety, speed, and modern API
          design that feels natural when working with TypeScript. Bun serves as
          both the package manager and runtime, providing significantly faster
          installation times and execution compared to Node.js. Tailwind CSS v4
          enables rapid UI development with utility classes while maintaining
          consistency across the application. The containerized architecture
          using Docker ensures development-production parity and simplifies
          deployment. MariaDB and Valkey provide a robust data layer, with
          MariaDB handling persistent storage and Valkey offering
          high-performance caching. The decision to develop on Artix Linux using
          Zed reflects a commitment to open-source tools and lightweight,
          efficient development environments.
        </p>

        <h2 class="text-2xl font-heading mb-3">Architecture Highlights</h2>
        <p class="text-zinc-700 mb-4">
          The architecture follows a clean separation of concerns with the
          frontend built in SolidJS and served as an SPA, while the backend API
          runs on ElysiaJS. API routes are prefixed and clearly separated from
          page routes, preventing conflicts and maintaining clarity. Static
          assets are optimized during build time and served efficiently in
          production. The development workflow uses{" "}
          <code class="bg-zinc-100 px-2 py-1 rounded">concurrently</code> to run
          both Vite's dev server and the Bun API server simultaneously,
          providing fast hot-reload for frontend changes and automatic restart
          for backend changes. Code quality is maintained through Biome, which
          handles both formatting and linting with superior performance compared
          to traditional tools like ESLint and Prettier.
        </p>
      </div>
    </section>
  );
}
