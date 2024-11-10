import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        classA?: string | undefined;
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
export type NewsProps = typeof __propDef.props;
export type NewsEvents = typeof __propDef.events;
export type NewsSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let href: string = '/';
 * @prop export let classA: string = '';
 */
export default class News extends SvelteComponent<NewsProps, NewsEvents, NewsSlots> {
}
export {};
