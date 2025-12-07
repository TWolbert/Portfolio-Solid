import { createStore } from "solid-js/store";
import { createEffect } from "solid-js";

export const [store, setStore] = createStore({
    pageTitle: "Home",
});

// Update document.title whenever pageTitle changes
createEffect(() => {
    if (store.pageTitle) {
        document.title = `${store.pageTitle} | Teun Wolbert`;
    } else {
        document.title = "Teun Wolbert | Portfolio";
    }
});
