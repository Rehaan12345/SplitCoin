<script>import { twMerge } from "tailwind-merge";
export let title = "";
export let titleDiv = "flex justify-between items-center mb-6";
export let h2Class = "text-lg lg:text-2xl font-bold text-gray-900 dark:text-white";
const titleDivCls = twMerge(titleDiv, $$props.classTitle);
const h2Cls = twMerge(h2Class, $$props.classH2);
</script>


<div class="{titleDivCls}">
  <h2 class="{h2Cls}">{title}</h2>
</div>

<slot></slot>

<!--
@component
[Go to docs](https://flowbite-svelte-blocks.codewithshin.com/)
## Props
@prop export let title: string = '';
@prop export let titleDiv: string = 'flex justify-between items-center mb-6';
@prop export let h2Class: string = 'text-lg lg:text-2xl font-bold text-gray-900 dark:text-white';
-->
