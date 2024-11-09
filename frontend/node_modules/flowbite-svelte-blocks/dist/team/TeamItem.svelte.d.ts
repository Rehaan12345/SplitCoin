import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
        imgClass?: string | undefined;
        h3Class?: string | undefined;
        spanClass?: string | undefined;
        href?: string | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        name?: string | undefined;
        jobTitle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        social: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TeamItemProps = typeof __propDef.props;
export type TeamItemEvents = typeof __propDef.events;
export type TeamItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700';
 * @prop export let imgClass: string = 'w-full rounded-lg sm:rounded-none sm:rounded-l-lg';
 * @prop export let h3Class: string = 'text-xl font-bold tracking-tight text-gray-900 dark:text-white';
 * @prop export let spanClass: string = 'text-gray-500 dark:text-gray-400';
 * @prop export let href: string = '';
 * @prop export let src: string = '';
 * @prop export let alt: string = '';
 * @prop export let name: string = '';
 * @prop export let jobTitle: string = '';
 */
export default class TeamItem extends SvelteComponent<TeamItemProps, TeamItemEvents, TeamItemSlots> {
}
export {};
