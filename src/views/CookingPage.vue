<template>
    <div>
        <h1> Cooking component</h1>
        <input type="checkbox" id="focus-toggle" v-model="focusToggle">
        <label for="focus-toggle">Focus</label>
        <input type="checkbox" id="premium-toggle" v-model="premiumToggle">
        <label for="premium-toggle">Premium</label>
        
    </div>
    <div>
        <CraftingTree 
            v-bind="beefStew"
        /> <!-- Need to simplify this down -->
    </div>
</template>

<script setup>
    import CraftingTree from '@/components/CraftingTree.vue';
    import { reactive, ref } from 'vue';

    // Setting up Premium and Focus Toggles
    const premiumToggle = ref(false)
    const focusToggle = ref(false)

    // Fetch price API [To develop]

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
    

</script>