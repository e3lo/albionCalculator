<template>
    <div>
        <h1> Cooking component</h1>
        <input type="checkbox" id="focus-toggle" v-model="focusToggle">
        <label for="focus-toggle">Focus</label>
        <input type="checkbox" id="premium-toggle" v-model="premiumToggle">
        <label for="premium-toggle">Premium</label>
        <button @click="refreshValues()">Refresh values</button>
    </div>
    <div>
        <CraftingTree v-for="item of activeRecipes" :key="activeRecipes.indexOf(item)" v-bind="item"/>
    </div>
</template>

<script setup>
    import CraftingTree from '@/components/CraftingTree.vue';
    import { reactive, ref } from 'vue';

    // Setting up Premium and Focus Toggles
    const premiumToggle = ref(false)
    const focusToggle = ref(false)

    // Fetch price API [To develop]
    /* async function refreshValues() {

        let shoppingList = createShoppingList()

        try {
            let response = await fetch('url')
            console.log("getting values")
        } catch(error) {
            console.error(`Error: ${error}`)
        }
    } */

    // Creating list of items to be requested in API
    /* function createShoppingList() {

    } */

    // Recipes
    const beefStew = reactive({
        'title' : "Beef Stew",
        'itemValue' : 1060,
        'craftingCost' : 300,
        'sellPrice' : 5600,
        'premium' : premiumToggle,
        'focus' : focusToggle,

        'recipe' : [
        {
            'title' : "RawBeef",
            'price' : 300,
            'quantity' : 72,
        },
        {
            'title' : "Pumpkin",
            'price' : 400,
            'quantity' : 36,
        },
        {
            'title' : "Bread",
            'price' : 344,
            'quantity' : 16,
        }],    
    })

    const porkOmelette = reactive({
        'title' : "Pork Omelette",
        'itemValue' : 1060,
        'craftingCost' : 300,
        'sellPrice' : 5400,
        'premium' : premiumToggle,
        'focus' : focusToggle,

        'recipe' : [
        {
            'title' : "Raw Pork",
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
    })

    // Setting up list of active recipies
    const activeRecipes = ref([beefStew, porkOmelette])

</script>