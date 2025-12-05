import { Router, Route } from "@solidjs/router";
import {
  renderToString,
  generateHydrationScript,
  isServer,
} from "solid-js/web";
import App from "./app";
import { routes } from "./routes";
import { For } from "solid-js";

export function render(url: string) {
  const html = renderToString(() => (
    <Router
      url={isServer ? url : ""}
      root={(props) => <App>{props.children}</App>}
    >
      <For each={routes}>
        {(route) => <Route path={route.path} component={route.component} />}
      </For>
    </Router>
  ));

  return { html, script: generateHydrationScript() };
}
