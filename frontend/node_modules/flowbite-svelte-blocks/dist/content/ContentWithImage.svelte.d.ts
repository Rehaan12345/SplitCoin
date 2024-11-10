import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        h2Class?: string | undefined;
        imgDivClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        default: {};
        image: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ContentWithImageProps = typeof __propDef.props;
export type ContentWithImageEvents = typeof __propDef.events;
export type ContentWithImageSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'font-light text-gray-500 sm:text-lg dark:text-gray-400';
 * @prop export let h2Class: string = 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white';
 * @prop export let imgDivClass: string = 'grid grid-cols-2 gap-4 mt-8';
 */
export default class ContentWithImage extends SvelteComponent<ContentWithImageProps, ContentWithImageEvents, ContentWithImageSlots> {
}
export {};
