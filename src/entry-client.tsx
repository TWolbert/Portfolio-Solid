// @refresh reload
import "./index.css";

import { Router } from "@solidjs/router";
import { hydrate, render } from "solid-js/web";
import App from "./app";
import { routes } from "./routes";

const root = document.getElementById("root");

const isDev = import.meta.env.DEV;
const mountFn = isDev ? render : hydrate;

mountFn(
  () => <Router root={(props) => <App>{props.children}</App>}>{routes}</Router>,
  root!,
);
