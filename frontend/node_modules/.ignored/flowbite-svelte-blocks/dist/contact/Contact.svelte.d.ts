import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        h2Class?: string | undefined;
        pClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        h2: {};
        paragraph: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ContactProps = typeof __propDef.props;
export type ContactEvents = typeof __propDef.events;
export type ContactSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let h2Class: string = 'mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white';
 * @prop export let pClass: string = 'mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl';
 */
export default class Contact extends SvelteComponent<ContactProps, ContactEvents, ContactSlots> {
}
export {};
