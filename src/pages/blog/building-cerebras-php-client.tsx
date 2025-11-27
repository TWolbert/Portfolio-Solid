import { createEffect } from "solid-js";
import { A } from "@solidjs/router";
import { setStore } from "../state/store";

export default function BuildingCerebrasPhpClient() {
  createEffect(() => {
    setStore("pageTite", "Building a PHP Client for Cerebras AI");
  });

  return (
    <section class="xl:px-[20%] px-3 py-8">
      <article class="bg-white rounded-xl shadow-md p-8">
        <div class="flex items-center gap-2 text-sm text-zinc-500 mb-4">
          <i class="bi bi-calendar3" />
          <time datetime="2025-11-27">2025-11-27</time>
        </div>

        <h1 class="text-4xl font-heading mb-6">
          Building a PHP Client for Cerebras AI: Ultra-Fast Inference for PHP Developers
        </h1>

        <div class="prose prose-zinc max-w-none">
          <p class="text-lg text-zinc-600 mb-6 leading-relaxed">
            When Cerebras AI launched their ultra-fast inference platform, I noticed a gap in the ecosystem: there was no native PHP client library.
            As a PHP developer working on AI-powered applications, I decided to build one. Here's the story of creating goed/cerebras-php,
            a modern PHP adapter that brings Cerebras's cutting-edge AI capabilities to the PHP world.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">The Problem: No PHP Support</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Cerebras AI offers one of the fastest inference platforms available, but their official SDKs only covered Python and JavaScript.
            PHP developers who wanted to integrate Cerebras into their applications had to either write raw HTTP requests or switch to a different language.
            This seemed like an unnecessary barrier, especially given PHP's widespread use in web development and the growing demand for AI-powered features in PHP applications.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Design Goals</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Before diving into code, I established several key design goals:
          </p>
          <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2 ml-4">
            <li><strong>API Parity:</strong> Endpoints and payloads should match the official Cerebras AI API exactly</li>
            <li><strong>Modern PHP:</strong> Leverage PHP 8.1+ features for type safety and developer experience</li>
            <li><strong>Streaming Support:</strong> Full Server-Sent Events (SSE) support for real-time responses</li>
            <li><strong>Developer-Friendly:</strong> Intuitive API that feels natural to PHP developers</li>
            <li><strong>Robust Error Handling:</strong> Automatic retry logic for common failure scenarios</li>
            <li><strong>Production-Ready:</strong> PSR-3 logging, comprehensive examples, and proper documentation</li>
          </ul>

          <h2 class="text-2xl font-heading mt-8 mb-4">Technical Implementation</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">HTTP Client Foundation</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            I chose Guzzle HTTP client as the foundation for several reasons: it's battle-tested, widely adopted in the PHP ecosystem,
            and provides excellent support for both synchronous and streaming requests. This choice also ensured compatibility with existing PHP applications
            that likely already use Guzzle.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Streaming Responses with SSE</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            One of the most challenging aspects was implementing Server-Sent Events streaming in PHP. Unlike Node.js or Python,
            PHP doesn't have built-in streaming primitives that map cleanly to SSE. I had to carefully manage buffers and parse chunks in real-time,
            ensuring that partial responses were handled correctly and that the streaming interface felt natural to use:
          </p>

          <div class="bg-zinc-50 rounded-lg p-4 mb-6 border border-zinc-200 overflow-x-auto">
            <pre class="text-sm"><code>{`$client = new Client($apiKey);

$stream = $client->chat()->create([
    'model' => 'llama3.1-8b',
    'messages' => [
        ['role' => 'user', 'content' => 'Hello!']
    ],
    'stream' => true,
]);

foreach ($stream as $chunk) {
    echo $chunk['choices'][0]['delta']['content'] ?? '';
}`}</code></pre>
          </div>

          <h3 class="text-xl font-heading mt-6 mb-3">Intelligent Retry Logic</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            API reliability was a key concern. The library includes automatic retry functionality that handles rate limits and transient server errors gracefully.
            When a rate limit is hit, the client automatically waits and retries. When a server error occurs, it implements exponential backoff.
            This happens transparently to the developer, reducing boilerplate in application code.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Type Safety and Developer Experience</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Leveraging PHP 8.1's improved type system, the library provides strong typing throughout.
            Method parameters, return types, and error handling all benefit from PHP's type checking,
            catching potential issues at development time rather than runtime. This also improves IDE autocomplete and inline documentation.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Overcoming Challenges</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">Buffer Management in Streaming</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            The biggest technical challenge was managing buffers during streaming responses. PHP's output buffering and Guzzle's streaming interface
            needed to work together seamlessly. After several iterations, I developed a solution that properly chunks responses while maintaining backwards
            compatibility with non-streaming requests.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">API Design Philosophy</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Balancing API familiarity with PHP conventions was tricky. I wanted developers familiar with the official Cerebras API to feel at home,
            but I also wanted the library to feel like idiomatic PHP. The solution was a fluent interface with method chaining that mirrors modern PHP frameworks
            like Laravel, while keeping parameter structures identical to the official API specification.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Demo Environment</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            To help developers get started quickly, I included a demo environment with browser-based chat interfaces.
            Developers can run <code class="bg-zinc-100 px-2 py-1 rounded">php -S localhost:8080 -t examples</code> and immediately see
            both streaming and non-streaming implementations in action. This hands-on approach helps developers understand the differences
            and choose the right approach for their use case.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Lessons Learned</h2>

          <h3 class="text-xl font-heading mt-6 mb-3">Documentation is Critical</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            While building the library, I realized that comprehensive examples were just as important as the code itself.
            Developers don't just need to know <em>what</em> methods are available; they need to see <em>how</em> to use them in real scenarios.
            The included examples cover everything from basic chat completions to advanced streaming use cases.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Testing Streaming is Hard</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Testing streaming responses required rethinking traditional unit testing approaches. I had to mock SSE streams and verify that
            chunks were parsed correctly, all while ensuring that the mocks accurately represented real API behavior.
          </p>

          <h3 class="text-xl font-heading mt-6 mb-3">Community Feedback Matters</h3>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Publishing the package on Packagist and GitHub opened it up to community feedback. Early adopters provided valuable insights
            that shaped the API design and helped identify edge cases I hadn't considered.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">The Result</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Since its release on October 15, 2025, goed/cerebras-php has made it significantly easier for PHP developers to integrate
            Cerebras AI's ultra-fast inference into their applications. The package has achieved 66 installs and provides a solid foundation
            for AI-powered PHP applications.
          </p>

          <p class="text-zinc-700 mb-4 leading-relaxed">
            The library fills an important gap in the PHP ecosystem, enabling developers to leverage cutting-edge AI technology without
            having to switch languages or write low-level HTTP code. Whether you're building a chatbot, content generation system,
            or any other AI-powered feature, cerebras-php provides a clean, intuitive interface to Cerebras's powerful platform.
          </p>

          <h2 class="text-2xl font-heading mt-8 mb-4">Try It Yourself</h2>
          <p class="text-zinc-700 mb-4 leading-relaxed">
            Getting started is simple:
          </p>

          <div class="bg-zinc-50 rounded-lg p-4 mb-6 border border-zinc-200 overflow-x-auto">
            <pre class="text-sm"><code>{`composer require goed/cerebras-php

$client = new \\Goed\\Cerebras\\Client('your-api-key');

$response = $client->chat()->create([
    'model' => 'llama3.1-8b',
    'messages' => [
        ['role' => 'user', 'content' => 'Hello, Cerebras!']
    ],
]);

echo $response['choices'][0]['message']['content'];`}</code></pre>
          </div>

          <p class="text-zinc-700 mb-4 leading-relaxed">
            The package is open-source under the MIT license, and contributions are welcome. Check out the repository on GitHub
            or view the package on Packagist to get started.
          </p>

          <div class="mt-8 pt-6 border-t border-zinc-200">
            <h3 class="text-xl font-heading mb-4">Links</h3>
            <div class="flex gap-4 flex-wrap">
              <a
                href="https://github.com/Good-by-WLBT/cerebras-php"
                target="_blank"
                class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
              >
                <i class="bi bi-github" />
                View on GitHub
              </a>
              <a
                href="https://packagist.org/packages/goed/cerebras-php"
                target="_blank"
                class="inline-flex items-center gap-2 bg-orange-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-100"
              >
                <i class="bi bi-box-seam" />
                View on Packagist
              </a>
              <A
                href="/projects/cerebras-php"
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
