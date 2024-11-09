import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ctatype?: ("default" | "image" | "heading" | "none") | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        img: {};
        h2: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type CtaProps = typeof __propDef.props;
export type CtaEvents = typeof __propDef.events;
export type CtaSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let ctatype: 'default' | 'image' | 'heading' | 'none' = 'default';
 */
export default class Cta extends SvelteComponent<CtaProps, CtaEvents, CtaSlots> {
}
export {};
