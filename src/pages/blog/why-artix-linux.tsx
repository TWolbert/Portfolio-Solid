import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import { setStore } from "../state/store";

export default function WhyArtixLinux() {
  createEffect(() => {
    setStore("pageTite", "Why I Switched to Artix Linux");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <article class="bg-white rounded-xl shadow-md p-8">
        <div class="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <i class="bi bi-calendar3" />
          <time datetime="2025-11-15">2025-11-15</time>
        </div>

        <h1 class="text-4xl font-heading mb-6">
          Why I Switched to Artix Linux: Embracing Init Freedom
        </h1>

        <div class="prose prose-zinc max-w-none">
          <p class="text-lg text-zinc-600 mb-6 leading-relaxed">
            After years of using various Linux distributions, I made the switch to Artix Linux and haven't looked back.
            For those unfamiliar, Artix is an Arch-based distribution that offers freedom from systemd, providing multiple init system options.
            Here's why this change transformed my development workflow and reignited my appreciation for Linux customization.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">The systemd Question</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Don't get me wrong—systemd is powerful and works well for many users. It's feature-rich, widely supported, and has become the de facto standard for most major distributions.
            However, I found myself increasingly frustrated with its complexity, scope creep, and the tight coupling it creates with other system components.
          </p>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            systemd has grown from an init system into a sprawling ecosystem that handles everything from logging to DNS resolution to network management.
            While this integration can be convenient, it also means that issues in one component can cascade into others, making debugging more complex than necessary.
            I wanted something simpler, more modular, and more aligned with the Unix philosophy of doing one thing well.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Why Artix?</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Artix Linux provides the best of both worlds: the excellent package management, rolling release model, and comprehensive documentation of Arch Linux,
            without the systemd dependency. You can choose from multiple init systems—OpenRC, runit, s6, or even dinit—giving you the freedom to pick what works best for your use case.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Init System Choice</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            I chose OpenRC for my setup. It's mature, well-documented, and strikes a good balance between simplicity and features.
            Service scripts are shell scripts I can actually read and understand. Debugging is straightforward because the init system doesn't abstract away what's happening.
            When something goes wrong, I can trace exactly what's happening without wading through binary logs or complex dependency graphs.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">The Arch Foundation</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Artix maintains compatibility with the Arch ecosystem, which means I still get access to the Arch User Repository (AUR) and the excellent Arch Wiki.
            The rolling release model ensures I always have the latest software without waiting for major version upgrades.
            Package management with pacman is fast and reliable, and the Artix repositories provide systemd-free versions of packages that would normally depend on it.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Performance and Simplicity</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">Boot Time</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            One immediate benefit was faster boot times. OpenRC's parallel service initialization is efficient without being overly complex.
            My system boots in seconds, and I can see exactly what's happening at each stage. The boot process is transparent and predictable.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Resource Usage</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Without systemd's numerous background services and daemons, my system runs leaner. Less memory overhead means more resources available for development tools and applications.
            On a development machine where I'm running Docker containers, databases, and multiple IDEs, every megabyte matters.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Modularity</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The Unix philosophy of "do one thing and do it well" is alive and well in Artix. Instead of systemd-logind, I use elogind.
            Instead of systemd-resolved, I configure DNS the traditional way. Each component can be swapped, configured, or removed independently.
            This modularity means I have precise control over my system without unnecessary complexity.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Development Workflow Benefits</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">Containerization</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            As someone who works extensively with Docker, I was initially concerned about compatibility. It turns out Docker runs perfectly fine without systemd.
            Using OpenRC to manage Docker as a service is straightforward, and I've experienced zero issues with containerized development environments.
            All my projects—whether they're ElysiaJS backends, SolidJS frontends, or PHP applications—run flawlessly.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Stability and Predictability</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            With fewer moving parts and a more transparent system architecture, issues are easier to diagnose and fix.
            When something doesn't work, I can trace the problem through readable configuration files and shell scripts rather than navigating binary logs and opaque service dependencies.
            This transparency saves significant debugging time and reduces frustration during development.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Minimalist Philosophy</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Artix encourages a minimalist approach—install only what you need, understand what's running, and maintain control over your system.
            This philosophy extends to my development setup. I use Zed as my editor, keep my toolchain lean, and avoid unnecessary dependencies.
            The result is a fast, responsive system that stays out of my way and lets me focus on code.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Challenges and Solutions</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">Package Compatibility</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Some packages from the AUR assume systemd is present. Artix provides systemd-free alternatives for most popular packages,
            and the community is active in maintaining compatibility. In rare cases where a package requires systemd, there's usually an alternative or a simple workaround.
            The Artix Wiki and forums are excellent resources for finding solutions.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Learning Curve</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            If you're coming from systemd-based distributions, there's a learning curve. Service management with OpenRC uses different commands,
            and you'll need to familiarize yourself with init scripts. However, this learning process is valuable—it deepens your understanding of how Linux systems work at a fundamental level.
            The time invested in learning pays dividends in system knowledge and troubleshooting ability.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Who Should Consider Artix?</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Artix isn't for everyone, and that's okay. If you prefer the convenience and integration systemd provides, there's no shame in that.
            However, if you value:
          </p>
          <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2 ml-4">
            <li>System simplicity and transparency</li>
            <li>Freedom to choose your init system</li>
            <li>The Unix philosophy of modularity</li>
            <li>Control over every aspect of your OS</li>
            <li>Learning how Linux systems work under the hood</li>
          </ul>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Then Artix Linux might be worth exploring. It's particularly well-suited for developers who want a lean, efficient system they fully understand and control.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">The Result</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Switching to Artix Linux reinvigorated my relationship with my development environment. I have a system that boots fast, runs lean, and stays out of my way.
            Service management is transparent and predictable. Debugging is straightforward. Resource usage is minimal.
          </p>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            All my development projects run smoothly—from building this portfolio with SolidJS and ElysiaJS to working on the cerebras-php package.
            Docker containers spin up quickly, databases run efficiently, and build processes are snappy. The system feels responsive and under my control.
          </p>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Most importantly, I understand my system better. I know what services are running, why they're running, and how they interact.
            This knowledge makes me a better developer and a more effective system administrator.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Getting Started</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            If you're interested in trying Artix, the installation process is similar to Arch Linux. The Artix Wiki provides comprehensive guides for different init systems.
            Start with a virtual machine if you're unsure, experiment with different init options, and take your time understanding how the system works.
          </p>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The Artix community is helpful and welcoming. Don't hesitate to ask questions on the forums or IRC channel.
            Remember that the goal isn't to prove systemd is bad—it's to find a system that works for you and aligns with your philosophy and workflow.
          </p>

          <div class="mt-8 pt-6 border-t border-zinc-200">
            <h3 class="text-xl font-heading mb-4">Resources</h3>
            <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2 ml-4">
              <li><a href="https://artixlinux.org" target="_blank" class="text-blue-600 hover:text-blue-700">Artix Linux Official Site</a></li>
              <li><a href="https://wiki.artixlinux.org" target="_blank" class="text-blue-600 hover:text-blue-700">Artix Wiki</a></li>
              <li><a href="https://wiki.archlinux.org" target="_blank" class="text-blue-600 hover:text-blue-700">Arch Wiki</a> (most documentation applies to Artix)</li>
            </ul>
          </div>

          <div class="mt-8 pt-6 border-t border-zinc-200">
            <A
              href="/blog"
              class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-heading"
            >
              <i class="bi bi-arrow-left-short text-xl" />
              Back to Blog
            </A>
          </div>
        </div>
      </article>
    </section>
  );
}
