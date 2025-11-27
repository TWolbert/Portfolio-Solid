import { createEffect, createSignal, onMount, Show, For } from "solid-js";
import { setStore } from "../state/store";
import { api } from "../../../utils/fetch";

interface ContactSubmission {
  id: number;
  full_name: string;
  email: string;
  message: string;
  submitted_at: string;
}

export default function Admin() {
  createEffect(() => {
    setStore("pageTite", "Admin");
  });

  const [authenticated, setAuthenticated] = createSignal(false);
  const [loading, setLoading] = createSignal(true);
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [error, setError] = createSignal("");
  const [contacts, setContacts] = createSignal<ContactSubmission[]>([]);

  // Check authentication on mount
  onMount(async () => {
    try {
      const response = await api.get("admin/check").json<{ authenticated: boolean }>();
      setAuthenticated(response.authenticated);

      if (response.authenticated) {
        await loadContacts();
      }
    } catch (err) {
      console.error("Auth check failed:", err);
    } finally {
      setLoading(false);
    }
  });

  const loadContacts = async () => {
    try {
      const response = await api.get("admin/contacts").json<{ submissions: ContactSubmission[] }>();
      setContacts(response.submissions);
    } catch (err) {
      console.error("Failed to load contacts:", err);
    }
  };

  const handleLogin = async (e: SubmitEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("admin/login", {
        json: {
          username: username(),
          password: password(),
        },
      }).json<{ success?: boolean; error?: string }>();

      if (response.success) {
        setAuthenticated(true);
        await loadContacts();
      } else if (response.error) {
        setError(response.error);
      }
    } catch (err: any) {
      console.error("Login failed:", err);
      // Try to parse error message from response
      if (err.response) {
        try {
          const errorData = await err.response.json();
          setError(errorData.error || "Login failed");
        } catch {
          setError("Login failed - please check your credentials");
        }
      } else {
        setError("Login failed - server error");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await api.post("admin/logout").json();
      setAuthenticated(false);
      setContacts([]);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <section class="xl:px-[20%] px-3 py-8 min-h-[80vh]">
      <Show when={!loading()} fallback={<div class="text-center py-20">Loading...</div>}>
        <Show
          when={authenticated()}
          fallback={
            <div class="max-w-md mx-auto mt-20">
              <div class="bg-white rounded-xl shadow-md p-8">
                <h1 class="text-3xl font-heading mb-6">Admin Login</h1>

                <form onSubmit={handleLogin} class="flex flex-col gap-4">
                  <div>
                    <label class="block text-sm font-heading mb-2">Username</label>
                    <input
                      type="text"
                      value={username()}
                      onInput={(e) => setUsername(e.currentTarget.value)}
                      class="w-full border rounded-xl p-2"
                      required
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-heading mb-2">Password</label>
                    <input
                      type="password"
                      value={password()}
                      onInput={(e) => setPassword(e.currentTarget.value)}
                      class="w-full border rounded-xl p-2"
                      required
                    />
                  </div>

                  {error() && (
                    <div class="text-red-600 text-sm">{error()}</div>
                  )}

                  <button
                    type="submit"
                    class="bg-blue-500 text-white font-heading px-6 py-3 rounded-xl hover:bg-blue-600 active:scale-95 transition-all duration-100"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          }
        >
          <div class="bg-white rounded-xl shadow-md p-8">
            <div class="flex justify-between items-center mb-6">
              <h1 class="text-3xl font-heading">Contact Submissions</h1>
              <button
                onClick={handleLogout}
                class="bg-red-500 text-white font-heading px-4 py-2 rounded-xl hover:bg-red-600 active:scale-95 transition-all duration-100"
              >
                Logout
              </button>
            </div>

            <Show
              when={contacts().length > 0}
              fallback={
                <p class="text-zinc-500 text-center py-10">No contact submissions yet.</p>
              }
            >
              <div class="space-y-4">
                <For each={contacts()}>
                  {(contact) => (
                    <div class="border border-zinc-200 rounded-lg p-4 hover:border-blue-400 transition-colors">
                      <div class="flex justify-between items-start mb-2">
                        <div>
                          <h3 class="font-heading text-lg">{contact.full_name}</h3>
                          <a
                            href={`mailto:${contact.email}`}
                            class="text-sm text-blue-600 hover:underline"
                          >
                            {contact.email}
                          </a>
                        </div>
                        <span class="text-xs text-zinc-500">
                          {new Date(contact.submitted_at).toLocaleString()}
                        </span>
                      </div>
                      <p class="text-zinc-700 whitespace-pre-wrap">{contact.message}</p>
                    </div>
                  )}
                </For>
              </div>
            </Show>
          </div>
        </Show>
      </Show>
    </section>
  );
}
