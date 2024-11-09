<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { onMount } from "svelte";

    let products;

    onMount(async () => {
        const url = 'https://dummyjson.com/products';
        const res = await fetch(url);
        products = await res.json();
        // fetch('https://dummyjson.com/products')
        // .then(res => res.json())
        // .then(console.log);
        console.log(products);
    });

    
</script>
  
<div class="tablewrapper">
<Table>
    <TableHead>
        <TableHeadCell>Title</TableHeadCell>
        <TableHeadCell>Brand</TableHeadCell>
        <TableHeadCell>Images</TableHeadCell>
        <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
        {#each products as p}
            <TableBodyRow>
                <TableBodyCell>{p.title}</TableBodyCell>
                <TableBodyCell>{p.brand}</TableBodyCell>
                <TableBodyCell>{p.Images}</TableBodyCell>
                <TableBodyCell>$2999</TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
</div>