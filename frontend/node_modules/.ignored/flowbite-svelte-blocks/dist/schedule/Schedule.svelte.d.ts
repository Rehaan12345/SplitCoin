import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        scheduleName?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        subtitle: {};
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ScheduleProps = typeof __propDef.props;
export type ScheduleEvents = typeof __propDef.events;
export type ScheduleSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let scheduleName: string = '';
 */
export default class Schedule extends SvelteComponent<ScheduleProps, ScheduleEvents, ScheduleSlots> {
}
export {};
