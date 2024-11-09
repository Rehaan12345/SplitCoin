import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        ulClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        btn: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type PricingItemWrapperProps = typeof __propDef.props;
export type PricingItemWrapperEvents = typeof __propDef.events;
export type PricingItemWrapperSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let ulClass: string = 'mb-8 space-y-4 text-left';
 */
export default class PricingItemWrapper extends SvelteComponent<PricingItemWrapperProps, PricingItemWrapperEvents, PricingItemWrapperSlots> {
}
export {};
