import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        figureClass?: string | undefined;
        blockQuoteClass?: string | undefined;
        h3Class?: string | undefined;
        footerBlockQuoteClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h3: {};
        default: {};
        caption: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TestimonialCardItemProps = typeof __propDef.props;
export type TestimonialCardItemEvents = typeof __propDef.events;
export type TestimonialCardItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let figureClass: string = 'flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700';
 * @prop export let blockQuoteClass: string = 'mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400';
 * @prop export let h3Class: string = 'text-lg font-semibold text-gray-900 dark:text-white';
 * @prop export let footerBlockQuoteClass: string = 'flex justify-center items-center space-x-3';
 */
export default class TestimonialCardItem extends SvelteComponent<TestimonialCardItemProps, TestimonialCardItemEvents, TestimonialCardItemSlots> {
}
export {};
