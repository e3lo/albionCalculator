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
    import { computed } from '@vue/reactivity';
    import { reactive, ref } from 'vue';

    // Setting up Premium and Focus Toggles
    const premiumToggle = ref(false)
    const focusToggle = ref(false)

    // Fetch price API [To develop]
    async function refreshValues() {
        console.log(buyingList)
        console.log(sellingList)
        try {
            //let response = await fetch('url')
            console.log("getting values")
        } catch(error) {
            console.error(`Error: ${error}`)
        }
    }

    // Creating list of items to be requested in API
    const buyingList = computed(() => {
        let list = []

        for (let items of activeRecipes.value) {
            for (let components of items['recipe']) {
                list.push(components['internalName'])
            }
        }

        let uniqueList = [...new Set(list)]

        return uniqueList
    })

    const sellingList = computed(() => {
        let list = []

        for (let items of activeRecipes.value) {
            list.push(items['internalName'])
        }

        return list
    })

    // Recipes
    const beefStew = reactive({
        'title' : "Beef Stew",
        'internalName' : 'T8_MEAL_STEW',
        'itemValue' : 1060,
        'craftingCost' : 300,
        'sellPrice' : 5600,
        'premium' : premiumToggle,
        'focus' : focusToggle,

        'recipe' : [
        {
            'title' : "Raw beef",
            'internalName' : 'T8_MEAT',
            'price' : 300,
            'quantity' : 72,
        },
        {
            'title' : "Pumpkin",
            'internalName' : 'T8_PUMPKIN',
            'price' : 400,
            'quantity' : 36,
        },
        {
            'title' : "Bread",
            'internalName' : 'T4_BREAD',
            'price' : 344,
            'quantity' : 16,
        }],    
    })

    const porkOmelette = reactive({
        'title' : "Pork Omelette",
        'internalName' : 'T7_MEAL_OMELETTE',
        'itemValue' : 1060,
        'craftingCost' : 300,
        'sellPrice' : 5400,
        'premium' : premiumToggle,
        'focus' : focusToggle,

        'recipe' : [
        {
            'title' : "Raw Pork",
            'internalName' : 'T7_MEAT',
            'price' : 300,
            'quantity' : 72,
        },
        {
            'title' : "Corn",
            'internalName' : 'T7_CORN',
            'price' : 400,
            'quantity' : 36,
        },
        {
            'title' : "Goose Eggs",
            'internalName' : 'T5_EGG',
            'price' : 344,
            'quantity' : 16,
        }],    
    })

    // Setting up list of active recipies
    const activeRecipes = ref([beefStew, porkOmelette])

</script>