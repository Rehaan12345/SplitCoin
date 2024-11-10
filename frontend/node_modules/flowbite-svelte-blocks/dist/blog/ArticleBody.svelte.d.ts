import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
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
export type ArticleBodyProps = typeof __propDef.props;
export type ArticleBodyEvents = typeof __propDef.events;
export type ArticleBodySlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let h2Class: string = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
 */
export default class ArticleBody extends SvelteComponent<ArticleBodyProps, ArticleBodyEvents, ArticleBodySlots> {
}
export {};
