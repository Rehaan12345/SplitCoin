import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FacebookProps = typeof __propDef.props;
export type FacebookEvents = typeof __propDef.events;
export type FacebookSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let href: string = '';
 */
export default class Facebook extends SvelteComponent<FacebookProps, FacebookEvents, FacebookSlots> {
}
export {};
