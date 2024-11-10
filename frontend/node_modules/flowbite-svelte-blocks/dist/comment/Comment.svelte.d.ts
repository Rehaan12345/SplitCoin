import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        titleDiv?: string | undefined;
        h2Class?: string | undefined;
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
export type CommentProps = typeof __propDef.props;
export type CommentEvents = typeof __propDef.events;
export type CommentSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let title: string = '';
 * @prop export let titleDiv: string = 'flex justify-between items-center mb-6';
 * @prop export let h2Class: string = 'text-lg lg:text-2xl font-bold text-gray-900 dark:text-white';
 */
export default class Comment extends SvelteComponent<CommentProps, CommentEvents, CommentSlots> {
}
export {};
