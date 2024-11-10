import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        blog: {
            id: string;
            title: string;
            lead?: string;
            author: {
                name: string;
                title?: string;
                profilePicture?: string;
                href?: string;
            };
            date?: string;
            isoDate?: string;
            content: string;
        };
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
export type BlogTemplateProps = typeof __propDef.props;
export type BlogTemplateEvents = typeof __propDef.events;
export type BlogTemplateSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let blog: Blog;
 */
export default class BlogTemplate extends SvelteComponent<BlogTemplateProps, BlogTemplateEvents, BlogTemplateSlots> {
}
export {};
