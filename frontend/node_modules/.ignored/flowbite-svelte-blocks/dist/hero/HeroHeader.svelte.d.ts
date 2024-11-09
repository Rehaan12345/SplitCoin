import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h1Class?: string | undefined;
        h2Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h1: {};
        h2: {};
        paragraph: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type HeroHeaderProps = typeof __propDef.props;
export type HeroHeaderEvents = typeof __propDef.events;
export type HeroHeaderSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let h1Class: string = 'mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white';
 * @prop export let h2Class: string = 'mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl';
 * @prop export let pClass: string = 'mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400';
 */
export default class HeroHeader extends SvelteComponent<HeroHeaderProps, HeroHeaderEvents, HeroHeaderSlots> {
}
export {};
