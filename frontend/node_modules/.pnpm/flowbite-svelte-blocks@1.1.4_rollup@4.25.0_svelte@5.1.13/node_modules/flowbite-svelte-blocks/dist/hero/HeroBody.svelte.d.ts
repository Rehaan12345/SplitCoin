import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        hero?: ("default" | "visual") | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        head: {};
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type HeroBodyProps = typeof __propDef.props;
export type HeroBodyEvents = typeof __propDef.events;
export type HeroBodySlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let hero: 'default' | 'visual' = 'default';
 */
export default class HeroBody extends SvelteComponent<HeroBodyProps, HeroBodyEvents, HeroBodySlots> {
}
export {};
