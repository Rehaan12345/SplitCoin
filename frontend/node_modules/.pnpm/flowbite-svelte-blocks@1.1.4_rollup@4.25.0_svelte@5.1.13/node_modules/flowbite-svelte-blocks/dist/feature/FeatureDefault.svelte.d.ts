import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
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
export type FeatureDefaultProps = typeof __propDef.props;
export type FeatureDefaultEvents = typeof __propDef.events;
export type FeatureDefaultSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0';
 */
export default class FeatureDefault extends SvelteComponent<FeatureDefaultProps, FeatureDefaultEvents, FeatureDefaultSlots> {
}
export {};
