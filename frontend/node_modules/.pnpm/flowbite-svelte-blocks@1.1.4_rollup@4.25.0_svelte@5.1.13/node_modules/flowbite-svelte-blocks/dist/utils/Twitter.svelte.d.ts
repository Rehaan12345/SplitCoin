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
export type TwitterProps = typeof __propDef.props;
export type TwitterEvents = typeof __propDef.events;
export type TwitterSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let href: string = '';
 */
export default class Twitter extends SvelteComponent<TwitterProps, TwitterEvents, TwitterSlots> {
}
export {};
