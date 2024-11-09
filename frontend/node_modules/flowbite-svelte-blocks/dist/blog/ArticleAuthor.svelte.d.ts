import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        authorDiv?: string | undefined;
        authorImgDiv?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        author: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ArticleAuthorProps = typeof __propDef.props;
export type ArticleAuthorEvents = typeof __propDef.events;
export type ArticleAuthorSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let authorDiv: string = 'flex justify-between items-center';
 * @prop export let authorImgDiv: string = 'flex items-center space-x-4';
 */
export default class ArticleAuthor extends SvelteComponent<ArticleAuthorProps, ArticleAuthorEvents, ArticleAuthorSlots> {
}
export {};
