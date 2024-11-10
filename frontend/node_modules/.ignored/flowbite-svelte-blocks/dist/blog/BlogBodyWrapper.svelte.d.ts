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
export type BlogBodyWrapperProps = typeof __propDef.props;
export type BlogBodyWrapperEvents = typeof __propDef.events;
export type BlogBodyWrapperSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'grid gap-8 lg:grid-cols-2';
 */
export default class BlogBodyWrapper extends SvelteComponent<BlogBodyWrapperProps, BlogBodyWrapperEvents, BlogBodyWrapperSlots> {
}
export {};
