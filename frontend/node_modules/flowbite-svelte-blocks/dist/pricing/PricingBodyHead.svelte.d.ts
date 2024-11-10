import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h3Class?: string | undefined;
        pClass?: string | undefined;
        priceClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h3: {};
        paragraph: {};
        price: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type PricingBodyHeadProps = typeof __propDef.props;
export type PricingBodyHeadEvents = typeof __propDef.events;
export type PricingBodyHeadSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let h3Class: string = 'mb-4 text-2xl font-semibold';
 * @prop export let pClass: string = 'font-light text-gray-500 sm:text-lg dark:text-gray-400';
 * @prop export let priceClass: string = 'flex justify-center items-baseline my-8';
 */
export default class PricingBodyHead extends SvelteComponent<PricingBodyHeadProps, PricingBodyHeadEvents, PricingBodyHeadSlots> {
}
export {};
