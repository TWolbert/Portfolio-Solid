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
    registerItem: () => number;
};

const AccordionContext = createContext<AccordionContextValue>();

const AccordionItemContext = createContext<number>();

export const Accordion: Component<{
    children: JSXElement;
    collapseBehavior?: "hide" | "show";
}> = (props) => {
    const [openItems, setOpenItems] = createSignal<Set<number>>(new Set());
    let itemCounter = 0;

    const registerItem = () => {
        return itemCounter++;
    };

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
        <AccordionContext.Provider value={{ openItems, toggleItem, registerItem }}>
            <div class="flex flex-col gap-2">{props.children}</div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem: Component<{ children: JSXElement }> = (props) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionItem must be used within Accordion");

    const index = context.registerItem();
    const isOpen = () => context.openItems().has(index);

    return (
        <AccordionItemContext.Provider value={index}>
            <div data-expanded={isOpen() ? "true" : undefined} data-collapsed={!isOpen() ? "true" : undefined}>
                {props.children}
            </div>
        </AccordionItemContext.Provider>
    );
};

export const AccordionTrigger: Component<{
    children: JSXElement;
    class?: string;
}> = (props) => {
    const context = useContext(AccordionContext);
    if (!context) throw new Error("AccordionTrigger must be used within Accordion");

    const index = useContext(AccordionItemContext);
    if (index === undefined) throw new Error("AccordionTrigger must be used within AccordionItem");

    return (
        <button
            type="button"
            onClick={() => context.toggleItem(index)}
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

    const index = useContext(AccordionItemContext);
    if (index === undefined) throw new Error("AccordionContent must be used within AccordionItem");

    const isOpen = () => context.openItems().has(index);

    return (
        <Show when={isOpen()}>
            <div class={props.class}>
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
