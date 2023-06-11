<template>
    <div>
        <h1> Cooking component</h1>
        <input type="checkbox" id="focus-toggle" v-model="focusToggle">
        <label for="focus-toggle">Focus</label>
        <input type="checkbox" id="premium-toggle" v-model="premiumToggle">
        <label for="premium-toggle">Premium</label>
        <input type="checkbox" id="east-server" v-model="eastServer">
        <label for="east-server">East Server</label>

        <select v-model="cityLocation">
            <option>Caerleon</option>
            <option>Martlock</option>
            <option>Thetford</option>
            <option>Fort Sterling</option>
            <option>Lymhurst</option>
            <option>Bridgewatch</option>
        </select>

        <button @click="refreshValues()">Refresh values</button>
    </div>
    <div>
        <CraftingTree v-for="[key, value] of Object.entries(activeRecipes)" :key="key" v-bind="value"/>
    </div>
</template>

<script setup>
    import CraftingTree from '@/components/CraftingTree.vue';
    import { computed } from '@vue/reactivity';
    import { reactive, ref } from 'vue';

    // Setting up user input values
    const premiumToggle = ref(false)
    const focusToggle = ref(false)
    const eastServer = ref(true)
    const cityLocation = ref('')

    // Fetch price API [To develop]
    async function refreshValues() {
        if (!cityLocation.value) {
            return (alert("Please enter a city first"))
        }

        let url = eastServer.value ? 'https://east.albion-online-data.com/api/v2/stats/prices/' : 'https://west.albion-online-data.com/api/v2/stats/prices/'
        let buyUrl = `${url}${buyingList.value.toString()}.json?locations=${cityLocation.value}`
        let sellUrl = `${url}${sellingList.value.toString()}.json?locations=${cityLocation.value}`

        try {
            let buyResponse = await fetch(buyUrl)
            let sellResponse = await fetch(sellUrl)

            buyResponse = await buyResponse.json()
            sellResponse = await sellResponse.json()

            for await (let item of sellResponse){
                activeRecipes.value[item.item_id]['sellPrice'] = item.sell_price_min
            }

            console.log(buyResponse)

        } catch(error) {
            console.error(`Error: ${error}`)
        }
    }

    // Creating list of items to be requested in API
    const buyingList = computed(() => {
        let list = []

        for (let items of Object.values(activeRecipes.value)) {
            for (let components of items['recipe']) {
                list.push(components['internalName'])
            }
        }

        let uniqueList = [...new Set(list)]

        return uniqueList
    })

    const sellingList = computed(() => {
        let list = []

        for (let items of Object.values(activeRecipes.value)) {
            list.push(items['internalName'])
        }

        return list
    })

    // Recipes
    const T8_MEAL_STEW = reactive({
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

    const T7_MEAL_OMELETTE = reactive({
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
    const activeRecipes = ref({
        'T8_MEAL_STEW' : T8_MEAL_STEW,
        'T7_MEAL_OMELETTE' : T7_MEAL_OMELETTE,
    })

</script>