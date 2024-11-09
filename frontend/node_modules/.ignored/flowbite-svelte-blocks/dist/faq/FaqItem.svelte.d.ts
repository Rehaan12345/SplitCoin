import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h3Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h3: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type FaqItemProps = typeof __propDef.props;
export type FaqItemEvents = typeof __propDef.events;
export type FaqItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'mb-10';
 * @prop export let h3Class: string = 'flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white';
 */
export default class FaqItem extends SvelteComponent<FaqItemProps, FaqItemEvents, FaqItemSlots> {
}
export {};
