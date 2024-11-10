import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
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
export type BannerProps = typeof __propDef.props;
export type BannerEvents = typeof __propDef.events;
export type BannerSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let id: string = 'banner';
 * @prop export let divClass: string = 'flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800';
 */
export default class Banner extends SvelteComponent<BannerProps, BannerEvents, BannerSlots> {
}
export {};
