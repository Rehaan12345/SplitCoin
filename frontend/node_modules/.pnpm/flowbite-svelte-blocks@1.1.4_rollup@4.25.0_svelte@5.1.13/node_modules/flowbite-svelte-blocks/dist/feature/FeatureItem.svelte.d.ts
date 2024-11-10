import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h3Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        h3: {};
        paragraph: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type FeatureItemProps = typeof __propDef.props;
export type FeatureItemEvents = typeof __propDef.events;
export type FeatureItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900';
 * @prop export let h3Class: string = 'mb-2 text-xl font-bold dark:text-white';
 * @prop export let pClass: string = 'text-gray-500 dark:text-gray-400';
 */
export default class FeatureItem extends SvelteComponent<FeatureItemProps, FeatureItemEvents, FeatureItemSlots> {
}
export {};
