// @refresh reload
import "./index.css";

import { Router, Route } from "@solidjs/router";
import { hydrate } from "solid-js/web";
import { For } from "solid-js";
import App from "./app";
import { routes } from "./routes";

const root = document.getElementById("root");

// Hydrate the server-rendered HTML
hydrate(
  () => (
    <Router root={(props) => <App>{props.children}</App>}>
      <For each={routes}>
        {(route) => <Route path={route.path} component={route.component} />}
      </For>
    </Router>
  ),
  root!,
);
