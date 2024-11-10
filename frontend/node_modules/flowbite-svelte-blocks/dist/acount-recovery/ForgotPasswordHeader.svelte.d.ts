import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        aClass?: string | undefined;
        imgClass?: string | undefined;
        src?: string | undefined;
        href?: string | undefined;
        alt?: string | undefined;
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
export type ForgotPasswordHeaderProps = typeof __propDef.props;
export type ForgotPasswordHeaderEvents = typeof __propDef.events;
export type ForgotPasswordHeaderSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let aClass: string = 'flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white';
 * @prop export let imgClass: string = 'w-8 h-8 mr-2';
 * @prop export let src: string = '';
 * @prop export let href: string = '';
 * @prop export let alt: string = '';
 */
export default class ForgotPasswordHeader extends SvelteComponent<ForgotPasswordHeaderProps, ForgotPasswordHeaderEvents, ForgotPasswordHeaderSlots> {
}
export {};
