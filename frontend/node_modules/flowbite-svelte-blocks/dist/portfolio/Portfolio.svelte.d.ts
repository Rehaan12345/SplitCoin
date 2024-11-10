import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string;
        subtitle?: string;
        headerDivClass?: string;
        h2Class?: string;
        subtitleClass?: string;
        bodyDivClasss?: string;
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
export type PortfolioProps = typeof __propDef.props;
export type PortfolioEvents = typeof __propDef.events;
export type PortfolioSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let title: string = '';
 * @prop export let subtitle: string = '';
 * @prop export let headerDivClass: string = 'max-w-2xl mx-auto text-center';
 * @prop export let h2Class: string = 'text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white';
 * @prop export let subtitleClass: string = 'mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400';
 * @prop export let bodyDivClasss: string = 'grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3';
 */
export default class Portfolio extends SvelteComponent<PortfolioProps, PortfolioEvents, PortfolioSlots> {
}
export {};
