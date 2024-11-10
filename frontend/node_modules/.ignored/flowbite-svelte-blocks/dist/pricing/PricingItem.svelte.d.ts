import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        liClass?: string | undefined;
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
export type PricingItemProps = typeof __propDef.props;
export type PricingItemEvents = typeof __propDef.events;
export type PricingItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let liClass: string = 'flex items-center space-x-3';
 */
export default class PricingItem extends SvelteComponent<PricingItemProps, PricingItemEvents, PricingItemSlots> {
}
export {};
