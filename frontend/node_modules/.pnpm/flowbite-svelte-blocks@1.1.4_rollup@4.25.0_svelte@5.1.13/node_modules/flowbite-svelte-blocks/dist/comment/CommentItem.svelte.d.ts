import { SvelteComponent } from "svelte";
import type { Comment } from '../types';
declare const __propDef: {
    props: {
        [x: string]: any;
        replyButton?: boolean | undefined;
        comment: Comment;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        dropdownMenu: {};
        reply: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type CommentItemProps = typeof __propDef.props;
export type CommentItemEvents = typeof __propDef.events;
export type CommentItemSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
 * ## Props
 * @prop export let replyButton: boolean = true;
 * @prop export let comment: Comment;
 */
export default class CommentItem extends SvelteComponent<CommentItemProps, CommentItemEvents, CommentItemSlots> {
}
export {};
