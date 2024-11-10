import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        divClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        label: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TeamHeaderProps = typeof __propDef.props;
export type TeamHeaderEvents = typeof __propDef.events;
export type TeamHeaderSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'mx-auto max-w-screen-sm text-center mb-8 lg:mb-16';
 */
export default class TeamHeader extends SvelteComponent<TeamHeaderProps, TeamHeaderEvents, TeamHeaderSlots> {
}
export {};
