<template>
    <div id="crafting-row">
        <div id="crafting-row__materials">
            <ConstructionNode v-for="[key, value] of Object.entries(props.recipe)" :key="key" v-bind="value" :title="key"></ConstructionNode>
        </div>
        <div id="crafting-row__results">
            <h3> {{ internalName }} </h3>
            <p class="crafting-row__results__text">Total Cost : {{ totalCost }}</p>
            <p class="crafting-row__results__text">Total Sales : {{ grossSales }}</p>
            <p class="crafting-row__results__text">Profit : {{ profit }}</p>
            <p class="crafting-row__results__text">Last Updated : {{ updateTime }} Hrs</p>
        </div>
        <div>
            <button @click="$emit('removeRecipe', props.internalName)">Remove</button>
        </div>
    </div>
</template>

<script setup>
    import { computed } from '@vue/reactivity';
    import ConstructionNode from './ConstructionNode.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        title : String,
        internalName : String,
        itemValue : Number,
        craftingCost : Number,
        sellPrice : Number,
        premium : Boolean,
        focus : Boolean,
        recipe : Object,
        resourceReturn : Number,
        time : String,
    })

    // Time delay
    const updateTime = computed(() => {
        let updateDate = new Date(props.time)
        let currentTime = new Date()

        let timeDifference = currentTime - updateDate // In ms
        return Math.round((timeDifference)/(1000*3600))
    })

    // Calculate profits
    let albionTax = computed(() => {
        return props.premium ? 0.04 : 0.08
    }) 

    let baseCraftingCost = computed(() => {
        let cost = 0
        for (let item in props.recipe) {
            cost += props.recipe[item]['price'] * props.recipe[item]['quantity']
        }

        return cost
    })

    let craftingStationCost = computed(() => {
        return props.itemValue * 0.1125 * (props.craftingCost / 100)
    })

    let totalCost = computed(() => {
        return Math.round(baseCraftingCost.value + craftingStationCost.value)
    })

    let grossSales = computed(() => {
        return Math.round((props.sellPrice * (1 - albionTax.value)) * 10 * (1 + props.resourceReturn))
    })

    let profit = computed(() => {
        return Math.round(grossSales.value - totalCost.value)
    })

</script>

<style scoped>

#crafting-row {
    display: flex;
    flex-direction: row;
    margin: 1em;
}

#crafting-row__materials {
    display: flex;
    flex-direction: row;
}

#crafting-row__results {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    padding: 2em;
}

.crafting-row__results__text {
    margin: 2px;
}

</style>