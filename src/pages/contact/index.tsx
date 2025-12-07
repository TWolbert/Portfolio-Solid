import { createEffect, createSignal } from "solid-js";
import { setStore } from "../state/store";
import z from "zod";
import { api } from "../../../utils/fetch";

const submitSchema = z.object({
  full_name: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(30, "Full name must be at most 30 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z
    .string()
    .min(1, "Message cannot be empty")
    .max(300, "Message must be at most 300 characters"),
});

export default function Contact() {
  createEffect(() => {
    setStore("pageTitle", "Contact");
  });

  const [consented, setConsented] = createSignal(false);
  const [errors, setErrors] = createSignal<string[]>([]);
  const [success, setSuccess] = createSignal<string>("");

  const handleSubmit = (
    e: SubmitEvent & { currentTarget: HTMLFormElement },
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      full_name: String(data.get("full_name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    const parsed = submitSchema.safeParse(payload);

    if (!parsed.success) {
      // Convert Zod issues to a simple list of messages
      const msgs = parsed.error.issues.map((issue) => {
        const path = issue.path.join(".");
        return path ? `${path}: ${issue.message}` : issue.message;
      });
      setErrors(msgs);
      return;
    }

    setErrors([]);

    api
      .post("contact", { body: JSON.stringify(parsed.data) })
      .then((data) =>
        data.json().then((data) => {
          setSuccess((data as { message: string }).message);
          form.reset();
        }),
      )
      .catch((data) => {
        console.log(data);
      });
  };

  return (
    <section
      id="contact"
      class="xl:px-[20%] px-3 min-h-full flex flex-col items-center justify-center my-auto mt-[20vh]"
    >
      <h1 class="font-heading text-3xl mb-5">Get in contact!</h1>
      <form
        method="post"
        onSubmit={handleSubmit}
        class="w-full max-w-md border p-4 rounded-2xl bg-white shadow-sm flex flex-col gap-3"
      >
        <input
          class="border rounded-xl p-2"
          name="full_name"
          placeholder="Full name"
        />
        <input
          class="border rounded-xl p-2"
          name="email"
          placeholder="you@goed.email"
        />
        <textarea
          class="border rounded-xl p-2"
          placeholder="Your message"
          name="message"
        />
        <div class="flex gap-2">
          <input
            type="checkbox"
            onChange={(e) => setConsented(e.currentTarget.checked)}
          />
          <span>
            I consent to my email, full name and message being saved; and I want
            to be emailed back.
          </span>
        </div>

        {errors().length > 0 && (
          <ul class="text-red-600 list-disc pl-5 space-y-1">
            {errors().map((error, idx) => (
              <li>{error}</li>
            ))}
          </ul>
        )}

        {success() && <span class="text-green-700">{success()}</span>}

        <button
          type="submit"
          disabled={!consented()}
          class="mt-2 rounded-md bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 disabled:opacity-50 transition-all duration-100"
        >
          <i class="bi bi-send-fill" /> Send
        </button>
      </form>
    </section>
  );
}
