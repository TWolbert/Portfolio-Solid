import { createEffect } from "solid-js";
import { CustomNavIcon } from "../../app";
import { setStore } from "../state/store";

export default function CerebrasPhp() {
  createEffect(() => {
    setStore("pageTite", "Cerebras PHP");
  });

  return (
    <>
      <CustomNavIcon href="https://github.com/Good-by-WLBT/cerebras-php" src="/cerebras.png" />
      <section class="xl:px-[20%] px-3 py-8">
        <div class="bg-white rounded-xl shadow-md p-6 mb-6">
          <img
            src="/cerebras.png"
            alt="Cerebras PHP"
            class="w-full h-64 object-contain mb-6 rounded-lg"
          />

          <h1 class="text-3xl font-heading mb-4">Cerebras PHP</h1>

          <p class="text-lg text-zinc-700 mb-6">
            An open-source PHP client library for the Cerebras AI API, bringing ultra-fast AI inference to PHP applications.
          </p>

          <h2 class="text-2xl font-heading mb-3">Overview</h2>
          <p class="text-zinc-700 mb-4">
            Cerebras PHP (goed/cerebras-php) is a modern PHP adapter that enables developers to integrate Cerebras AI's ultra-fast inference capabilities into their PHP applications.
            The package provides a clean, intuitive interface for accessing chat completions and other AI endpoints, with full support for streaming responses and automatic error handling.
            Built with modern PHP 8.1+ features, it leverages Guzzle HTTP client for reliable API communication and includes comprehensive examples for both streaming and non-streaming implementations.
          </p>

          <div class="bg-zinc-50 rounded-lg p-4 mb-6 border border-zinc-200">
            <h3 class="font-heading mb-2 text-lg">Installation</h3>
            <code class="text-sm bg-white px-3 py-2 rounded block">
              composer require goed/cerebras-php
            </code>
          </div>

          <h2 class="text-2xl font-heading mb-3">Technologies Used</h2>
          <div class="flex flex-wrap gap-2 mb-6">
            {["php.png", "composer.jpg"].map((icon) => (
              <img
                src={`/${icon}`}
                alt=""
                class="size-12 rounded border border-zinc-200 object-contain p-1 bg-white"
              />
            ))}
          </div>

          <h2 class="text-2xl font-heading mb-3">Key Features</h2>
          <ul class="list-disc list-inside text-zinc-700 mb-4 space-y-2">
            <li>Full compatibility with official Cerebras AI API endpoints and payloads</li>
            <li>Server-Sent Events (SSE) support for real-time streaming responses</li>
            <li>Automatic retry functionality for rate limits and server errors</li>
            <li>PSR-3 logging support for debugging and monitoring</li>
            <li>Comprehensive examples including browser-based chat interfaces</li>
            <li>Modern PHP 8.1+ codebase with type safety</li>
          </ul>

          <h2 class="text-2xl font-heading mb-3">Development Process</h2>
          <p class="text-zinc-700 mb-4">
            The development of Cerebras PHP focused on creating a developer-friendly interface that abstracts the complexity of the Cerebras AI API while maintaining full feature parity.
            The package was designed with best practices in mind, using Guzzle for HTTP communication, implementing PSR-3 logging standards, and providing both streaming and non-streaming examples.
            Special attention was given to error handling, with automatic retry logic for common scenarios like rate limiting and temporary server errors.
            The included demo environment (accessible via <code class="bg-zinc-100 px-2 py-1 rounded">php -S localhost:8080 -t examples</code>) allows developers to quickly test and understand both streaming and non-streaming implementations.
          </p>

          <h2 class="text-2xl font-heading mb-3">Challenges & Solutions</h2>
          <p class="text-zinc-700 mb-4">
            One of the main challenges was implementing reliable Server-Sent Events streaming in PHP, which required careful buffer management and chunk parsing.
            This was solved by creating a robust streaming parser that handles real-time responses correctly while maintaining backwards compatibility with non-streaming requests.
            Another challenge was designing an API that feels natural to PHP developers while staying true to the Cerebras API specification.
            The solution was to create a fluent interface with method chaining that mirrors common PHP patterns, making it intuitive for developers familiar with modern PHP frameworks.
            Error handling and retry logic required careful consideration of different failure scenarios, resulting in an intelligent retry system that handles rate limits and transient errors automatically without user intervention.
          </p>

          <h2 class="text-2xl font-heading mb-3">Impact</h2>
          <p class="text-zinc-700 mb-4">
            Since its release on October 15, 2025, the package has achieved 66 installs and 1 GitHub star, providing PHP developers with easy access to Cerebras's ultra-fast AI inference capabilities.
            The package fills an important gap in the PHP ecosystem, enabling PHP applications to leverage cutting-edge AI technology with minimal setup.
          </p>

          <div class="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://github.com/Good-by-WLBT/cerebras-php"
              target="_blank"
              class="inline-flex items-center gap-2 bg-blue-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
            >
              <i class="bi bi-box-arrow-up-right" />
              View on GitHub
            </a>
            <a
              href="https://packagist.org/packages/goed/cerebras-php"
              target="_blank"
              class="inline-flex items-center gap-2 bg-orange-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-orange-600 active:scale-95 transition-all duration-100"
            >
              <i class="bi bi-box-arrow-up-right" />
              View on Packagist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
