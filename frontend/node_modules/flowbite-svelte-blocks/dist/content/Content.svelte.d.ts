import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ContentProps = typeof __propDef.props;
export type ContentEvents = typeof __propDef.events;
export type ContentSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400';
 * @prop export let h2Class: string = 'mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white';
 */
export default class Content extends SvelteComponent<ContentProps, ContentEvents, ContentSlots> {
}
export {};
