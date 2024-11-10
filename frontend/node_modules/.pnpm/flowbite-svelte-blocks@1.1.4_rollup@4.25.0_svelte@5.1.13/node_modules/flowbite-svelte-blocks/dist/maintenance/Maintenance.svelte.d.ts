import { SvelteComponent } from "svelte";
import ToolsIcon from './ToolsIcon.svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        Icon?: typeof ToolsIcon | undefined;
        h1Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h1: {};
        paragraph: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type MaintenanceProps = typeof __propDef.props;
export type MaintenanceEvents = typeof __propDef.events;
export type MaintenanceSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let Icon = ToolsIcon;
 * @prop export let h1Class: string = 'mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white';
 * @prop export let pClass: string = 'font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400';
 */
export default class Maintenance extends SvelteComponent<MaintenanceProps, MaintenanceEvents, MaintenanceSlots> {
}
export {};
