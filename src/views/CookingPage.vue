<template>
    <div>
        <h1>Step 1. Select recipes to calculate profits</h1>
        
        <!-- Recipe Selector -->
        <div id="recipe-selector">
            <div class="recipe-list__container">
                <div class="recipe-list__header">
                    <IconCreator internal-name="T7_MEAL_OMELETTE" icon-type="gameIcons"></IconCreator>
                    <h3>Omelette</h3>
                    <IconCreator internal-name="expand_down" icon-type="icons" class="recipe-list__icon"></IconCreator>
                </div>
                <div class="recipe-list__item" id="omeletteRecipes" v-for="items in recipeFamily('OMELETTE')" :key="items.internalName">
                    <button class="recipe-list__button" @click="addRecipe(items)">
                        <IconCreator :internalName="items.internalName" icon-type="gameIcons"/>
                        {{ items.title }}
                    </button>
                </div>
            </div>

            <div class="recipe-list__container">
                <div class="recipe-list__header">
                    <IconCreator internal-name="T8_MEAL_STEW" icon-type="gameIcons"></IconCreator>
                    <h3>Stew</h3>
                    <IconCreator internal-name="expand_down" icon-type="icons" class="recipe-list__icon"></IconCreator>
                </div>
                <div class="recipe-list__item" id="stewRecipes" v-for="items in recipeFamily('STEW')" :key="items.internalName">
                    <button class="recipe-list__button" @click="addRecipe(items)">
                        <IconCreator :internalName="items.internalName" icon-type="gameIcons"/>
                        {{ items.title }}
                    </button>
                </div>
            </div>
        </div>


        <!-- Other info selections -->
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
    import IconCreator from '@/components/IconCreator.vue';

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

    // Sorting recipes into categories
    function recipeFamily(type) {
        return recipe.COOKING_TREE[type]
    }

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

#recipe-selector {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 800px;
    margin: auto;
    gap: 1rem 1rem;
}
.recipe-list__container{
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 1.25rem;
    border: 2px solid rgba(255, 255, 255, 0.40);
    padding: 1rem;
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