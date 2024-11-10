import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
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
export type BlogHeadProps = typeof __propDef.props;
export type BlogHeadEvents = typeof __propDef.events;
export type BlogHeadSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'mx-auto max-w-screen-sm text-center lg:mb-16 mb-8';
 * @prop export let h2Class: string = 'mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
 */
export default class BlogHead extends SvelteComponent<BlogHeadProps, BlogHeadEvents, BlogHeadSlots> {
}
export {};
