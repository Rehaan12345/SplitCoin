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
export type TeamWrapperProps = typeof __propDef.props;
export type TeamWrapperEvents = typeof __propDef.events;
export type TeamWrapperSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let divClass: string = 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6';
 */
export default class TeamWrapper extends SvelteComponent<TeamWrapperProps, TeamWrapperEvents, TeamWrapperSlots> {
}
export {};
