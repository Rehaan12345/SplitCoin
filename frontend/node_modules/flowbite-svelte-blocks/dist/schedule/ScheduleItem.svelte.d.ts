import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        divClass?: string;
        pClass?: string;
        h3Class?: string;
        aClass?: string;
        item?: {
            time: string;
            href: string;
            title: string;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ScheduleItemProps = typeof __propDef.props;
export type ScheduleItemEvents = typeof __propDef.events;
export type ScheduleItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center';
 * @prop export let pClass: string = 'w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0';
 * @prop export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
 * @prop export let aClass: string = 'hover:underline';
 * @prop export let item = {
 *   time: '',
 *   href: '',
 *   title: ''
 * };
 */
export default class ScheduleItem extends SvelteComponent<ScheduleItemProps, ScheduleItemEvents, ScheduleItemSlots> {
}
export {};
