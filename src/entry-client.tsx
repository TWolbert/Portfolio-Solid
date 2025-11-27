// @refresh reload
import "./index.css";

import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./app";
import { routes } from "./routes";

const root = document.getElementById("root");

// Always use client-side rendering (no SSR hydration)
render(
  () => <Router root={(props) => <App>{props.children}</App>}>{routes}</Router>,
  root!,
);
