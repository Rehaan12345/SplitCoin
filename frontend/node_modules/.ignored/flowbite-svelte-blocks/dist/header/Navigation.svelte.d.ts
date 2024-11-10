import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        navClass?: string | undefined;
        divClass?: string | undefined;
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
export type NavigationProps = typeof __propDef.props;
export type NavigationEvents = typeof __propDef.events;
export type NavigationSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let navClass: string = 'bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800';
 * @prop export let divClass: string = 'flex flex-wrap justify-between items-center mx-auto max-w-screen-xl';
 */
export default class Navigation extends SvelteComponent<NavigationProps, NavigationEvents, NavigationSlots> {
}
export {};
