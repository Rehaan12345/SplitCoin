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
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type NewsletterProps = typeof __propDef.props;
export type NewsletterEvents = typeof __propDef.events;
export type NewsletterSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'mx-auto max-w-screen-md sm:text-center';
 * @prop export let h2Class: string = 'mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white';
 */
export default class Newsletter extends SvelteComponent<NewsletterProps, NewsletterEvents, NewsletterSlots> {
}
export {};
