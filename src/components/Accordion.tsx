import {
    type Component,
    type JSXElement,
    createSignal,
    createContext,
    useContext,
    For,
    Show,
} from "solid-js";

type AccordionContextValue = {
    openItems: () => Set<number>;
    toggleItem: (index: number) => void;
};

const AccordionContext = createContext<AccordionContextValue>();

export const Accordion: Component<{
    children: JSXElement;
    collapseBehavior?: "hide" | "show";
}> = (props) => {
    const [openItems, setOpenItems] = createSignal<Set<number>>(new Set());

    const toggleItem = (index: number) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div class="flex flex-col gap-2">{props.children}</div>
        </AccordionContext.Provider>
    );
};

let itemIndex = 0;

export const AccordionItem: Component<{ children: JSXElement }> = (props) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionItem must be used within Accordion");

    const [index] = createSignal(itemIndex++);
    const isOpen = () => context.openItems().has(index());

    return (
        <div data-expanded={isOpen() ? "true" : undefined} data-collapsed={!isOpen() ? "true" : undefined}>
            {props.children}
        </div>
    );
};

export const AccordionTrigger: Component<{
    children: JSXElement;
    class?: string;
}> = (props) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within Accordion");

    // Find the parent item's index by traversing up
    let currentElement: Element | null = null;
    const index = () => {
        if (typeof document !== "undefined" && currentElement) {
            const item = currentElement.closest("[data-expanded], [data-collapsed]");
            if (item) {
                const siblings = Array.from(item.parentElement?.children || []);
                return siblings.indexOf(item);
            }
        }
        return 0;
    };

    return (
        <button
            ref={(el) => (currentElement = el)}
            type="button"
            onClick={() => context.toggleItem(index())}
            class={props.class}
        >
            {props.children}
        </button>
    );
};

export const AccordionContent: Component<{
    children: JSXElement;
    class?: string;
}> = (props) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionContent must be used within Accordion");

    let currentElement: Element | null = null;
    const index = () => {
        if (typeof document !== "undefined" && currentElement) {
            const item = currentElement.closest("[data-expanded], [data-collapsed]");
            if (item) {
                const siblings = Array.from(item.parentElement?.children || []);
                return siblings.indexOf(item);
            }
        }
        return 0;
    };

    const isOpen = () => context.openItems().has(index());

    return (
        <Show when={isOpen()}>
            <div ref={(el) => (currentElement = el)} class={props.class}>
                {props.children}
            </div>
        </Show>
    );
};

const AccordionNamespace = Object.assign(Accordion, {
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
});

export default AccordionNamespace;
