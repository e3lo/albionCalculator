<template>
    <div>
        <h1> Cooking component</h1>
    </div>
    <div>
        <CraftingTree 
            :title="beefStew['title']" 
            :itemValue="beefStew['itemValue']"
            :craftingCost="beefStew['craftingCost']" 
            :sellPrice="beefStew['sellPrice']" 
            :recipe="beefStew['recipe']"
        />
    </div>
</template>

<script setup>
    import CraftingTree from '@/components/CraftingTree.vue';

    // Fetch price API [To develop]

    // Recipes
    const beefStew = {
        'title' : "Beef Stew",
        'itemValue' : 1060,
        'craftingCost' : 300,
        'sellPrice' : 5600,

        'recipe' : [
        {
            'title' : "RawBeef",
            'price' : 300,
            'quantity' : 72,
        },
        {
            'title' : "Corn",
            'price' : 400,
            'quantity' : 36,
        },
        {
            'title' : "Goose Eggs",
            'price' : 344,
            'quantity' : 16,
        }],    
    }
    

</script>