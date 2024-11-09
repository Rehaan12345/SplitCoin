import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type GithubProps = typeof __propDef.props;
export type GithubEvents = typeof __propDef.events;
export type GithubSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let href: string = '';
 */
export default class Github extends SvelteComponent<GithubProps, GithubEvents, GithubSlots> {
}
export {};
