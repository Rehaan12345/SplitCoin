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
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type TeamBodyProps = typeof __propDef.props;
export type TeamBodyEvents = typeof __propDef.events;
export type TeamBodySlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'grid gap-8 mb-6 lg:mb-16 md:grid-cols-2';
 */
export default class TeamBody extends SvelteComponent<TeamBodyProps, TeamBodyEvents, TeamBodySlots> {
}
export {};
