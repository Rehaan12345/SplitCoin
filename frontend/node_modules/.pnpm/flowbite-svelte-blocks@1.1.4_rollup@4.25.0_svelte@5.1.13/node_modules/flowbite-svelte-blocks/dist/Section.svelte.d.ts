import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        sectionClass?: string | undefined;
        name?: ("advancedTable" | "blog" | "comment" | "cta" | "ctawithimg" | "contact" | "content" | "contentwithimg" | "crudcreatedrawer" | "crudcreateform" | "crudreadsection" | "default" | "faq" | "feature" | "forgotpassword" | "headingwithctabutton" | "heroDefault" | "heroVisual" | "login" | "logos" | "maintenance" | "newsletter" | "none" | "page500" | "page404" | "portfolio" | "pricing" | "register" | "reset" | "schedule" | "social" | "tableheader" | "team" | "testimonial") | undefined;
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
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let sectionClass: string = 'relative py-6 sm:py-10';
 * @prop export let name: 'advancedTable' | 'blog' | 'comment' | 'cta' | 'ctawithimg' | 'contact' | 'content' | 'contentwithimg' | 'crudcreatedrawer' | 'crudcreateform' | 'crudreadsection' | 'default' | 'faq' | 'feature' | 'forgotpassword' | 'headingwithctabutton' | 'heroDefault' | 'heroVisual' | 'login' | 'logos' | 'maintenance' | 'newsletter' | 'none' | 'page500' | 'page404' | 'portfolio' | 'pricing' | 'register' | 'reset' | 'schedule' | 'social' | 'tableheader' | 'team' | 'testimonial' = 'default';
 */
export default class Section extends SvelteComponent<SectionProps, SectionEvents, SectionSlots> {
}
export {};
