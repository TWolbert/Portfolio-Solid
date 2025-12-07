import { createEffect } from "solid-js";
import { CustomNavIcon } from "../../app";
import { setStore } from "../state/store";

export default function DeKenner() {
  createEffect(() => {
    setStore("pageTitle", "De Kenner");
  });

  return (
    <>
      <CustomNavIcon href="https://dekenner.nl" src="/dekenner.png" />
      <section class="xl:px-[20%] px-3 py-8">
        <div class="bg-white rounded-xl shadow-md p-12 mb-6 text-center">
          <div class="text-6xl mb-6">🚧</div>

          <h1 class="text-3xl font-heading mb-4">
            De Kenner
          </h1>

          <p class="text-lg text-zinc-600 mb-8 max-w-md mx-auto">
            This project page is still under construction. Check back soon for the full story!
          </p>

          <div class="inline-flex items-center gap-2 text-zinc-500 text-sm">
            <i class="bi bi-hammer" />
            <span>Coming soon...</span>
          </div>
        </div>
      </section>
    </>
  );
}
