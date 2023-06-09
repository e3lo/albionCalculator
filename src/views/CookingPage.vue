<template>
    <div>
        <h1> Cooking component</h1>
    </div>
    <div>
        <CraftingTree title="Beef Stew" :item-value="1060" :crafting-cost="300" :recipe="beefStew"/>
    </div>
</template>

<script setup>
    import CraftingTree from '@/components/CraftingTree.vue';

    // Fetch price API [To develop]

    // Recipes
    const beefStew = [
        {
            'title' : "RawBeef",
            'price' : "300",
            'quantity' : "72",
        },
        {
            'title' : "Corn",
            'price' : "400",
            'quantity' : "36",
        },
        {
            'title' : "Goose Eggs",
            'price' : "344",
            'quantity' : "16",
        },
    ]
</script>