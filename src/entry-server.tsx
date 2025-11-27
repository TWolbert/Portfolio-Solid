import { Router } from "@solidjs/router";
import { renderToStringAsync } from "solid-js/web";
import App from "./app";
import { routes } from "./routes";

export async function render(url: string) {
  const html = await renderToStringAsync(() => (
    <Router url={url} root={(props) => <App>{props.children}</App>}>
      {routes}
    </Router>
  ));

  return html;
}
