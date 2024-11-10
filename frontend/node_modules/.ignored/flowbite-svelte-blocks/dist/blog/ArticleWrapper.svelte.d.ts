import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        articleClass?: string | undefined;
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
export type ArticleWrapperProps = typeof __propDef.props;
export type ArticleWrapperEvents = typeof __propDef.events;
export type ArticleWrapperSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let articleClass: string = 'p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
 */
export default class ArticleWrapper extends SvelteComponent<ArticleWrapperProps, ArticleWrapperEvents, ArticleWrapperSlots> {
}
export {};
