import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        divOuterClass?: string;
        headerType?: "search" | "textbtn" | "custom";
        divSlotClass?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        search: {};
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TableHeaderProps = typeof __propDef.props;
export type TableHeaderEvents = typeof __propDef.events;
export type TableHeaderSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divOuterClass: string = 'relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg';
 * @prop export let headerType: 'search' | 'textbtn' | 'custom' = 'search';
 * @prop export let divSlotClass: string = 'flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3';
 */
export default class TableHeader extends SvelteComponent<TableHeaderProps, TableHeaderEvents, TableHeaderSlots> {
}
export {};
