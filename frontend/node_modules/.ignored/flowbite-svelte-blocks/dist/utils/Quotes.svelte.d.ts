import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        svgCls?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type QuotesProps = typeof __propDef.props;
export type QuotesEvents = typeof __propDef.events;
export type QuotesSlots = typeof __propDef.slots;
export default class Quotes extends SvelteComponent<QuotesProps, QuotesEvents, QuotesSlots> {
}
export {};
