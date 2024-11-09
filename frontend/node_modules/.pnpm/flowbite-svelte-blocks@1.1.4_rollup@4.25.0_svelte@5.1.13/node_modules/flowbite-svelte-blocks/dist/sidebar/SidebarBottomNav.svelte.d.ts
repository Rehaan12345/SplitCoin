import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        divClass?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type SidebarBottomNavProps = typeof __propDef.props;
export type SidebarBottomNavEvents = typeof __propDef.events;
export type SidebarBottomNavSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20';
 */
export default class SidebarBottomNav extends SvelteComponent<SidebarBottomNavProps, SidebarBottomNavEvents, SidebarBottomNavSlots> {
}
export {};
