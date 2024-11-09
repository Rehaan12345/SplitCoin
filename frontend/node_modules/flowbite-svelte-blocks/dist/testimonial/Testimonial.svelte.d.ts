import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        [x: string]: any;
        icon: ComponentType;
        figureClass?: string | undefined;
        figureFooterClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        footer: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TestimonialProps = typeof __propDef.props;
export type TestimonialEvents = typeof __propDef.events;
export type TestimonialSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let icon: ComponentType;
 * @prop export let figureClass: string = 'max-w-screen-md mx-auto';
 * @prop export let figureFooterClass: string = 'flex items-center justify-center mt-6 space-x-3';
 */
export default class Testimonial extends SvelteComponent<TestimonialProps, TestimonialEvents, TestimonialSlots> {
}
export {};
