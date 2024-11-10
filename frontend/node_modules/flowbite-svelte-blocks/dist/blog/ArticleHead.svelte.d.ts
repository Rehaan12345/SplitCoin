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
export type ArticleHeadProps = typeof __propDef.props;
export type ArticleHeadEvents = typeof __propDef.events;
export type ArticleHeadSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'flex justify-between items-center mb-5 text-gray-500';
 */
export default class ArticleHead extends SvelteComponent<ArticleHeadProps, ArticleHeadEvents, ArticleHeadSlots> {
}
export {};
