import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        divClass?: string;
        customerClass?: string;
        titleClass?: string;
        descriptionClass?: string;
        linkClass?: string;
        item?: {
            customer: string;
            title: string;
            description: string;
            href: string;
            linkTitle: string;
        };
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
export type PortfolioItemProps = typeof __propDef.props;
export type PortfolioItemEvents = typeof __propDef.events;
export type PortfolioItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'space-y-4';
 * @prop export let customerClass: string = 'bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300';
 * @prop export let titleClass: string = 'text-2xl font-bold leading-tight text-gray-900 dark:text-white';
 * @prop export let descriptionClass: string = 'text-lg font-normal text-gray-500 dark:text-gray-400';
 * @prop export let linkClass: string = 'text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800';
 * @prop export let item = {
 *   customer: '',
 *   title: '',
 *   description: '',
 *   href: '',
 *   linkTitle: ''
 * };
 */
export default class PortfolioItem extends SvelteComponent<PortfolioItemProps, PortfolioItemEvents, PortfolioItemSlots> {
}
export {};
