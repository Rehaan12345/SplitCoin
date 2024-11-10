import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        aClass?: string | undefined;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        top: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type RegisterProps = typeof __propDef.props;
export type RegisterEvents = typeof __propDef.events;
export type RegisterSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let href: string = '';
 * @prop export let aClass: string = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
 * @prop export let divClass: string = 'w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700';
 */
export default class Register extends SvelteComponent<RegisterProps, RegisterEvents, RegisterSlots> {
}
export {};
