import { createEffect } from "solid-js";
import { CustomNavIcon } from "../../app";
import { setStore } from "../state/store";

export default function GoedEmail() {
  createEffect(() => {
    setStore("pageTite", "Goed. Email");
  });

  return (
    <>
      <CustomNavIcon href="https://goed.email" src="/goed.png" />
      <section class="xl:px-[20%] px-3 py-8">
        <div class="bg-white rounded-xl shadow-md p-6 mb-6">
          <img
            src="/goed.png"
            alt="Goed. Email"
            class="w-full h-64 object-contain mb-6 rounded-lg"
          />

          <h1 class="text-3xl font-heading mb-4">Goed. Email</h1>

          <p class="text-lg text-zinc-700 mb-6">
            A modern, high-performance email client built with Laravel and
            Livewire. Lightning-fast delivery, encrypted by default, with
            AI-powered intelligence.
          </p>

          <h2 class="text-2xl font-heading mb-3">Overview</h2>
          <p class="text-zinc-700 mb-4">
            Goed.Email is a modern email platform that reimagines how email
            should work in 2025. Built from the ground up with Laravel and
            Livewire, it combines the reliability of traditional email with
            cutting-edge web technologies. The name "Goed" means "good" in
            multiple languages (Dutch, Afrikaans, Danish, and more), reflecting
            the core philosophy: building something universally excellent. The
            platform prioritizes three key pillars—lightning-fast performance,
            encryption by default, and AI-powered intelligence through Cerebras
            integration. With a clean, modern interface powered by Alpine.js and
            Tailwind CSS, reactive components via Livewire, and robust
            infrastructure using Docker, MariaDB, and Valkey, Goed.Email
            delivers the email experience users deserve: fast, secure, and
            intuitive.
          </p>

          <h2 class="text-2xl font-heading mb-3">Technologies Used</h2>
          <div class="flex flex-wrap gap-2 mb-6">
            {[
              "laravel.png",
              "php.png",
              "tailwindcss.png",
              "valkey.png",
              "mariadb.png",
              "docker.png",
              "caddy.png",
              "bun.svg",
              "composer.jpg",
              "cerebras-small.png",
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
            <li>
              Lightning-fast email delivery with optimized caching and database
              indexing
            </li>
            <li>
              End-to-end encryption by default with secure TLS connections
            </li>
            <li>
              AI-powered features: smart composition, automated categorization,
              intelligent search
            </li>
            <li>
              Reactive UI with Livewire for instant updates without page reloads
            </li>
            <li>Real-time email notifications via WebSocket connections</li>
            <li>
              Modern, responsive interface built with Tailwind CSS and Alpine.js
            </li>
            <li>High-performance caching with Valkey (Redis fork)</li>
            <li>Robust data storage with MariaDB</li>
            <li>
              Containerized deployment with Docker for consistency and
              scalability
            </li>
            <li>Automatic HTTPS with Caddy web server and Let's Encrypt</li>
            <li>Privacy-focused: no data selling, no invasive tracking</li>
            <li>Open-source with publicly available source code</li>
          </ul>

          <h2 class="text-2xl font-heading mb-3">Development Process</h2>
          <p class="text-zinc-700 mb-4">
            The development of Goed.Email focused on solving real problems with
            modern solutions. Laravel provides the robust backend foundation
            with authentication, routing, job queuing, and database management.
            Livewire sits on top, enabling reactive components that update
            instantly without writing extensive JavaScript. Alpine.js handles
            client-side interactivity for dropdowns, modals, and transitions
            while remaining lightweight. The frontend uses Tailwind CSS for
            rapid UI development with consistent utility classes. MariaDB
            manages persistent data while Valkey provides high-performance
            caching for frequently accessed information. Bun compiles frontend
            assets significantly faster than traditional Node.js tooling. The
            entire stack runs in Docker containers managed by Caddy, which
            automatically handles HTTPS certificates. AI integration uses the
            cerebras-php library to provide smart features like composition
            assistance, categorization, and intelligent search without
            sacrificing performance. Every architectural decision prioritized
            speed, security, and user experience.
          </p>

          <h2 class="text-2xl font-heading mb-3">Challenges & Solutions</h2>
          <p class="text-zinc-700 mb-4">
            Building an email client from scratch presented significant
            challenges. Email protocols (SMTP, IMAP, POP3) are complex and
            decades old, requiring deep understanding of RFCs and edge case
            handling—Laravel's mail functionality provided a foundation, but
            custom implementations were needed for threading, read receipts, and
            efficient attachment handling. Real-time updates required WebSocket
            integration and careful state management to keep the UI synchronized
            with the server without excessive database queries. Spam filtering
            needed intelligent detection without false positives, solved through
            a combination of traditional filtering and AI-powered analysis.
            Scalability concerns were addressed through asynchronous job
            processing, database connection pooling, aggressive caching
            strategies, and horizontal scaling via Docker containers. Security
            implementation involved encryption at rest, TLS for connections,
            secure authentication hashing, rate limiting, and suspicious
            activity detection. The AI integration required balancing powerful
            features with performance—Cerebras's ultra-fast inference ensures AI
            assistance feels instant rather than slow. Testing email systems is
            particularly challenging due to edge cases, varying email client
            rendering, and server protocol quirks, requiring comprehensive test
            environments and both automated and manual testing across real-world
            scenarios.
          </p>

          <h2 class="text-2xl font-heading mb-3">Design Philosophy</h2>
          <p class="text-zinc-700 mb-4">
            Goed.Email's design philosophy centers on three principles:
            performance first, privacy and transparency, and simplicity over
            feature bloat. Performance is evaluated at every level—page load
            times, database queries, caching strategies, and scalability under
            load. Privacy is non-negotiable with source code transparency, clear
            privacy policies in plain language, no data selling, and honest data
            practices. Features are added thoughtfully rather than
            comprehensively—doing core email functions exceptionally well rather
            than being mediocre at everything. The interface remains clean
            because clutter hides functionality behind complexity. AI features
            enhance rather than replace human judgment, appearing where users
            explicitly want assistance. This philosophy results in an email
            experience that feels fast, respects user privacy, and stays out of
            the way so users can focus on communication rather than wrestling
            with the tool.
          </p>

          <h2 class="text-2xl font-heading mb-3">Impact & Future</h2>
          <p class="text-zinc-700 mb-4">
            Goed.Email represents a modern approach to email that prioritizes
            user experience, privacy, and performance. The platform continues to
            evolve with planned features including advanced filtering rules,
            enhanced mobile applications, calendar integration, and improved
            collaboration tools. Every enhancement maintains the core commitment
            to speed, security, and simplicity. The open-source nature and
            community-oriented development ensure that the platform serves users
            rather than exploits them.
          </p>

          <div class="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://getgoed.com"
              target="_blank"
              class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
            >
              <i class="bi bi-box-arrow-up-right" />
              Sign up for the waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
