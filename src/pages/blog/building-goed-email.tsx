import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import { setStore } from "../state/store";

export default function BuildingGoedEmail() {
  createEffect(() => {
    setStore("pageTite", "Building Goed.Email: A Modern Email Client");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <article class="bg-white rounded-xl shadow-md p-8">
        <div class="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <i class="bi bi-calendar3" />
          <time datetime="2025-11-20">2025-11-20</time>
        </div>

        <h1 class="text-4xl font-heading mb-6">
          Building Goed.Email: Rethinking Email for the Modern Web
        </h1>

        <div class="prose prose-zinc max-w-none">
          <p class="text-lg text-zinc-600 mb-6 leading-relaxed">
            Email hasn't fundamentally changed in decades, yet we expect it to
            handle everything from casual conversations to business-critical
            communications. Goed.Email represents my attempt to build a modern
            email client that prioritizes performance, security, and user
            experience. Here's the story of building an email platform from the
            ground up with Laravel, Livewire, and AI-powered features.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">The Vision</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The name "Goed" means "good" in multiple European languages—Dutch,
            Afrikaans, Danish, and more. This multilingual foundation reflects
            the core philosophy: building something universally good,
            accessible, and excellent. The goal was to create an email client
            that feels fast, looks modern, and puts security first without
            sacrificing usability.
          </p>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Traditional email clients often feel sluggish, bloated with features
            most users never touch, or locked behind proprietary systems. I
            wanted to build something different—an email experience that's
            lightning-fast, encrypted by default, and built with modern web
            technologies that make development efficient and maintenance
            straightforward.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Technology Stack</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Choosing the right technology stack was critical. I needed tools
            that were mature, performant, and aligned with modern development
            practices.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Laravel & Livewire</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Laravel serves as the backend framework, providing robust routing,
            authentication, database management, and job queuing. Its ecosystem
            is mature and well-documented, making it an excellent choice for a
            complex application like an email client. Livewire sits on top of
            Laravel, enabling reactive, dynamic interfaces without writing
            JavaScript for every interaction. This combination allows for a
            modern single-page application feel with the simplicity of
            server-rendered components.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Alpine.js & Tailwind CSS
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Alpine.js provides just enough JavaScript to handle client-side
            interactivity—dropdowns, modals, transitions—without the overhead of
            a full framework. Tailwind CSS enables rapid UI development with
            utility classes, ensuring visual consistency while maintaining
            flexibility. Together, they create a lightweight, responsive
            interface that feels snappy and modern.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Database & Caching</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            MariaDB handles persistent data storage—user accounts, email
            metadata, settings, and more. It's reliable, performant, and
            well-suited for relational data. Valkey (a Redis fork) provides
            high-performance caching and session management, ensuring that
            frequently accessed data loads instantly. This combination delivers
            the speed users expect from a modern web application.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Infrastructure & Deployment
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The entire application runs in Docker containers, ensuring
            consistency between development and production environments. Caddy
            serves as the web server, providing automatic HTTPS with Let's
            Encrypt certificates and efficient static file serving. Bun handles
            frontend asset compilation, offering significantly faster build
            times compared to traditional Node.js tooling.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            AI Integration with Cerebras
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            One unique feature is the integration of Cerebras AI via my
            cerebras-php library. This enables AI-powered email features like:
            smart composition assistance, automated categorization, intelligent
            search, and summary generation for long email threads. The
            ultra-fast inference provided by Cerebras ensures these AI features
            feel instantaneous, not like an afterthought that slows down the
            experience.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Key Features</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Lightning-Fast Performance
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Every architectural decision prioritized speed. Livewire's reactive
            components update instantly without full page reloads. Valkey
            caching ensures frequently accessed data loads from memory. Database
            queries are optimized and indexed properly. The result is an email
            experience that feels instant—opening messages, switching folders,
            and searching all happen in milliseconds.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Encryption by Default</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Security isn't optional. All data is encrypted at rest using
            industry-standard encryption. Connections are secured with TLS. User
            authentication uses modern, secure hashing algorithms. The
            privacy-first approach means user data is never sold, shared, or
            used for advertising. Email is personal, and Goed.Email treats it
            that way.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Modern, Intuitive Interface
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The interface is clean and uncluttered. Tailwind CSS enables a
            responsive design that works beautifully on desktop, tablet, and
            mobile. Common actions are easy to find and execute. The color
            scheme is easy on the eyes with proper contrast for accessibility.
            Keyboard shortcuts power user efficiency without cluttering the UI
            for casual users.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            AI-Powered Intelligence
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The Cerebras integration brings genuine intelligence to email
            management. Compose assistance helps draft professional messages.
            Smart categorization automatically organizes incoming mail.
            Intelligent search understands context, not just keywords. Thread
            summaries condense long conversations into digestible overviews.
            These aren't gimmicks—they're practical features that save time
            daily.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">
            Development Challenges
          </h2>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Email Protocol Complexity
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Email protocols (SMTP, IMAP, POP3) are decades old and notoriously
            complex. Implementing reliable email sending and receiving required
            deep dives into RFCs, handling edge cases, and ensuring
            compatibility with various email servers. Laravel's mail
            functionality provided a solid foundation, but custom
            implementations were needed for advanced features like read
            receipts, threading, and handling attachments efficiently.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Real-Time Updates</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Users expect new emails to appear instantly without manually
            refreshing. Implementing this required WebSocket connections and
            careful state management to keep the UI in sync with the server.
            Livewire's real-time capabilities helped, but optimization was
            necessary to prevent excessive database queries and ensure updates
            felt instant even under load.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Spam and Security</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Email attracts spam and malicious actors. Implementing effective
            spam filtering without false positives is an ongoing challenge.
            Security measures like rate limiting, CAPTCHA on registration, and
            suspicious activity detection needed careful tuning. The AI
            integration helped with intelligent spam detection, learning from
            user behavior to improve accuracy over time.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Scalability</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Email services must handle varying loads—quiet mornings and busy
            afternoons. The architecture needed to scale horizontally. Queue
            workers process emails asynchronously, preventing bottlenecks.
            Database connection pooling and caching strategies ensure consistent
            performance as user count grows. Docker containerization makes
            scaling straightforward—spin up more containers as needed.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Design Philosophy</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">Performance First</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Every feature is evaluated through the lens of performance impact.
            Does this slow down page loads? Will this scale under heavy usage?
            Can we cache this? These questions guide development decisions.
            Users notice when email is slow, and they appreciate when it's fast.
            Goed.Email prioritizes speed at every layer of the stack.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Privacy and Transparency
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Users trust email services with sensitive communications. That trust
            is earned through transparency and respect for privacy. The source
            code is available for review. Privacy policies are clear and written
            in plain language. Data practices are honest—no selling user data,
            no invasive tracking, no hidden agendas. Email should be a tool that
            serves users, not a product that exploits them.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            Simplicity Over Feature Bloat
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            It's tempting to add every possible feature, but restraint is
            valuable. Goed.Email focuses on doing core email functions
            exceptionally well rather than being mediocre at everything.
            Features are added when they solve real problems and can be
            implemented without compromising performance or usability. The
            interface remains clean because clutter hides functionality behind
            complexity.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Lessons Learned</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">
            The Importance of Caching
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Aggressive caching with Valkey transformed performance. User
            sessions, frequently accessed mailboxes, and computed values are
            cached intelligently. The key is invalidating caches correctly—stale
            data frustrates users. Getting cache invalidation right requires
            careful thought about data dependencies and update patterns, but the
            performance gains are worth the complexity.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">
            AI as Enhancement, Not Replacement
          </h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            AI features work best when they enhance the user experience without
            being intrusive. Smart suggestions are helpful; AI that tries to do
            everything is annoying. The Cerebras integration shines in specific
            use cases—composition assistance, categorization, search—where users
            explicitly want help. It doesn't try to replace human judgment, just
            augment it.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Testing Email is Hard</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Email systems have countless edge cases. Different email clients
            render HTML differently. Various servers have quirks in how they
            handle protocols. Comprehensive testing required setting up test
            environments with multiple email servers, testing across different
            clients, and simulating edge cases. Automated testing helps, but
            manual testing across real-world scenarios remains essential.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">The Road Ahead</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Goed.Email continues to evolve. Planned features include advanced
            filtering rules, better mobile applications, calendar integration,
            and enhanced collaboration tools. The core commitment remains:
            performance, privacy, and simplicity.
          </p>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Building an email client from scratch is ambitious, but it's also
            rewarding. Every performance optimization, every security
            enhancement, and every user experience improvement makes email
            better for people who use the platform daily. That's the goal—making
            email work the way it should: fast, secure, and out of your way so
            you can focus on communication, not the tool.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Try It Yourself</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Goed.Email is available at{" "}
            <a
              href="https://app.goed.email"
              target="_blank"
              class="text-blue-600 hover:text-blue-700"
            >
              app.goed.email
            </a>
            . Registration is open, and the platform is actively maintained.
            Whether you're looking for a privacy-focused email client, a fast
            alternative to existing services, or just curious about what a
            modern email experience can be, give it a try.
          </p>

          <div class="mt-8 pt-6 border-t border-zinc-200">
            <h3 class="text-xl font-heading mb-4">Links</h3>
            <div class="flex gap-4 flex-wrap">
              <a
                href="https://getgoed.com"
                target="_blank"
                class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
              >
                <i class="bi bi-envelope" />
                Sign up for the wailist
              </a>
              <A
                href="/projects/goed"
                class="inline-flex items-center gap-2 bg-zinc-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-zinc-600 active:scale-95 transition-all duration-100"
              >
                <i class="bi bi-folder" />
                View Project Page
              </A>
            </div>
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
