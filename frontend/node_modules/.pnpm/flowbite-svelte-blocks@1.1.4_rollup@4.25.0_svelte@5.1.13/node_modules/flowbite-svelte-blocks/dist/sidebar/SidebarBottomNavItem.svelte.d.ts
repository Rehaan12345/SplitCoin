import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string;
        tooltip?: string;
        aClass?: string;
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
export type SidebarBottomNavItemProps = typeof __propDef.props;
export type SidebarBottomNavItemEvents = typeof __propDef.events;
export type SidebarBottomNavItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let href: string = '';
 * @prop export let tooltip: string = '';
 * @prop export let aClass: string = 'inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600';
 */
export default class SidebarBottomNavItem extends SvelteComponent<SidebarBottomNavItemProps, SidebarBottomNavItemEvents, SidebarBottomNavItemSlots> {
}
export {};
