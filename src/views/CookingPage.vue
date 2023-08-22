<template>
    <div>
        <h1>Step 1 Select recipes to calculate profits</h1>
        
        <!-- Recipe Selector -->
        <div id="recipe-selector">
            <SelectionTree type="OMELETTE" iconName="T7_MEAL_OMELETTE" @add-recipe="addRecipe"/>
            <SelectionTree type="STEW" iconName="T8_MEAL_STEW" @add-recipe="addRecipe"/>
        </div>


        <!-- Other info selections -->
        <h1>Step 2 Fine tune the settings</h1>
        <input type="checkbox" id="focus-toggle" v-model="focusToggle">
        <label for="focus-toggle">Focus</label>
        <input type="checkbox" id="premium-toggle" v-model="premiumToggle">
        <label for="premium-toggle">Premium</label>
        <input type="checkbox" id="east-server" v-model="eastServer">
        <label for="east-server">East Server</label>
        <input type="number" id="crafting-cost" v-model="craftingCost">
        <label for="crafting-cost">crafting cost</label>

        <select v-model="cityLocation">
            <option>Caerleon</option>
            <option>Martlock</option>
            <option>Thetford</option>
            <option>Fort Sterling</option>
            <option>Lymhurst</option>
            <option>Bridgewatch</option>
        </select>

        <!-- Calculate profits button -->
        <h1>Step 3 Calculate profits</h1>

        <button @click="refreshValues()" :disabled="fetchingAPI" >Refresh values</button>
    </div>

    <!-- Crafting calculator -->
    <div>
        <CraftingTree v-for="[key, value] of Object.entries(activeRecipes)" 
            :key="key" 
            v-bind="value" 
            :premium="premiumToggle" 
            :focus="focusToggle" 
            :resourceReturn="resourceReturn"
            :craftingCost="craftingCost"
            @removeRecipe="removeRecipe"
        />
    </div>
</template>

<script setup>
    import CraftingTree from '@/components/CraftingTree.vue';
    import { computed } from '@vue/reactivity';
    import { ref } from 'vue';
    import * as recipe from '@/recipes/cookingRecipes';
    import SelectionTree from '@/components/SelectionTree.vue';

    // Bonus City
    const bonusCity = "Caerleon"

    // Setting up list of active recipies
    const activeRecipes = ref({
        'T8_MEAL_STEW' : recipe.T8_MEAL_STEW,
        'T7_MEAL_OMELETTE' : recipe.T7_MEAL_OMELETTE,
    })

    // Setting up user input values
    const premiumToggle = ref(false)
    const focusToggle = ref(false)
    const eastServer = ref(true)
    const fetchingAPI = ref(false)
    const cityLocation = ref('')
    const craftingCost = ref(0)

    // Removing active recipes
    function removeRecipe(item) {
        console.log(item)
        delete activeRecipes.value[item]
    }

    // Adding recipes
    function addRecipe(item) {
        activeRecipes.value[item.internalName] = item
    }

    // Calculating resource return rate
    const resourceReturn = computed(() => {
        let returnRate = 0

        if (cityLocation.value == bonusCity) {
            if (focusToggle.value) {
                returnRate = 0.479
            } else {
                returnRate = 0.248
            }
        } else {
            if (focusToggle.value) {
                returnRate = 0.435
            } else {
                returnRate = 0.152
            }
        }

        return returnRate
    })


    // Fetch price API [To develop]
    async function refreshValues() {
        fetchingAPI.value = true
        if (!cityLocation.value) {
            return (alert("Please enter a city first"))
        }

        let url = eastServer.value ? 'https://east.albion-online-data.com/api/v2/stats/prices/' : 'https://west.albion-online-data.com/api/v2/stats/prices/'
        let buyUrl = `${url}${buyingList.value.toString()}.json?locations=${cityLocation.value}`
        let sellUrl = `${url}${sellingList.value.toString()}.json?locations=${cityLocation.value}`

        console.log(buyUrl)
        try {
            let buyResponse = await fetch(buyUrl)
            let sellResponse = await fetch(sellUrl)

            buyResponse = await buyResponse.json()
            sellResponse = await sellResponse.json()

            // Converts sellResponse into an object with key value pairs
            let buyPriceObject = buyResponse.reduce((acc, cur) => ({
                ...acc, [cur.item_id] : {
                    'price' : cur.sell_price_min,
                    'time' : cur.sell_price_min_date,
                }
            }), {}) 

            console.log(buyPriceObject)
            console.log(sellResponse)

            for await (let item of sellResponse){
                let currentRecipeProduct = activeRecipes.value[item.item_id]
                currentRecipeProduct['sellPrice'] = item.sell_price_min
                currentRecipeProduct['time'] = item.sell_price_min_date

                for (let material in currentRecipeProduct['recipe']) {
                    currentRecipeProduct['recipe'][material]['price'] = buyPriceObject[material]['price']
                    currentRecipeProduct['recipe'][material]['time'] = buyPriceObject[material]['time']
                }
            }

            console.log("Done")
            fetchingAPI.value = false
        } catch(error) {
            console.error(`Error: ${error}`)
            fetchingAPI.value = false
        }
    }

    // Creating list of items to be requested in API to be bought (materials)
    const buyingList = computed(() => {
        let list = []

        for (let items of Object.values(activeRecipes.value)) {
            for (let components in items['recipe']) {
                list.push(components)
            }
        }

        let uniqueList = [...new Set(list)] // Removes duplicate entries

        return uniqueList
    })

    // Creates list of items to be sold for API (final products)
    const sellingList = computed(() => {
        let list = []
        for (let items in activeRecipes.value) {
            list.push(items)
        }

        return list
    })

</script>

<style scoped>
h1 {
    margin-top: 2em;
}

#recipe-selector {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin: auto;
    gap: 1rem 1rem;
    margin-bottom: 1em;
}
.recipe-list__container{
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 1.25rem;
    border: 2px solid rgba(255, 255, 255, 0.40);
    padding: 1rem;
    height: min-content;
}

.recipe-list__header {
    display: flex;
    justify-content: space-between;
}

.recipe-list__icon {
    width: 2em;
    margin-left: auto;
}

.recipe-list__item{
    padding: 0 2em 2em 2em;
    display: block;
}

.recipe-list__button {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>