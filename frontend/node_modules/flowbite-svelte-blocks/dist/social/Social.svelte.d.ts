import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        dlClass?: string | undefined;
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
export type SocialProps = typeof __propDef.props;
export type SocialEvents = typeof __propDef.events;
export type SocialSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6';
 * @prop export let dlClass: string = 'grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white';
 */
export default class Social extends SvelteComponent<SocialProps, SocialEvents, SocialSlots> {
}
export {};
