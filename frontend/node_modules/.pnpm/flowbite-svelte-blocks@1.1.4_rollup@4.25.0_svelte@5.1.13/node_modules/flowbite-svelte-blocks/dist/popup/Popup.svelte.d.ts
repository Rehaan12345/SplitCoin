import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        outerDivClass?: string | undefined;
        innerDivClass?: string | undefined;
        contentDivClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type PopupProps = typeof __propDef.props;
export type PopupEvents = typeof __propDef.events;
export type PopupSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let outerDivClass: string = 'overflow-y-auto overflow-x-hidden z-50 md:inset-0 md:h-full';
 * @prop export let innerDivClass: string = 'relative p-4 w-full max-w-lg h-full md:h-auto';
 * @prop export let contentDivClass: string = 'relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8';
 */
export default class Popup extends SvelteComponent<PopupProps, PopupEvents, PopupSlots> {
}
export {};
