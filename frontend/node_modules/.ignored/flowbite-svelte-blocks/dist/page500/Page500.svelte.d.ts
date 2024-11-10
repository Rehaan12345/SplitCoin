import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h1Class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h1: {};
        paragraph: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type Page500Props = typeof __propDef.props;
export type Page500Events = typeof __propDef.events;
export type Page500Slots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'mx-auto max-w-screen-sm text-center';
 * @prop export let h1Class: string = 'mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500';
 */
export default class Page500 extends SvelteComponent<Page500Props, Page500Events, Page500Slots> {
}
export {};
