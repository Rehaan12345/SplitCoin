import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        paragraph: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type PricingHeadProps = typeof __propDef.props;
export type PricingHeadEvents = typeof __propDef.events;
export type PricingHeadSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'mx-auto max-w-screen-md text-center mb-8 lg:mb-12';
 * @prop export let h2Class: string = 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
 * @prop export let pClass: string = 'mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400';
 */
export default class PricingHead extends SvelteComponent<PricingHeadProps, PricingHeadEvents, PricingHeadSlots> {
}
export {};
