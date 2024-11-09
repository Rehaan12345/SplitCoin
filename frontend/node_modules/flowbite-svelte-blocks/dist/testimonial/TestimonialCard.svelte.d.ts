import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        headerClass?: string | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TestimonialCardProps = typeof __propDef.props;
export type TestimonialCardEvents = typeof __propDef.events;
export type TestimonialCardSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let headerClass: string = 'mx-auto max-w-screen-sm';
 * @prop export let divClass: string = 'grid mb-8 lg:mb-12 lg:grid-cols-2';
 */
export default class TestimonialCard extends SvelteComponent<TestimonialCardProps, TestimonialCardEvents, TestimonialCardSlots> {
}
export {};
