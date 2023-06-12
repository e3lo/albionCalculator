<template>
    <div id="crafting-row">
        <div id="crafting-row__materials">
            <ConstructionNode v-for="[key, value] of Object.entries(props.recipe)" :key="key" :title="key" :price="value['price']" :quantity="value['quantity']"></ConstructionNode>
        </div>
        <div id="crafting-row__results">
            Total Cost : {{ totalCost }} <br/>
            Total Sales : {{ grossSales }} <br/>
            Profit : {{ profit }} <br/>
        </div>
    </div>

</template>

<script setup>
    import { computed } from '@vue/reactivity';
    import ConstructionNode from './ConstructionNode.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        title : String,
        itemValue : Number,
        craftingCost : Number,
        sellPrice : Number,
        premium : Boolean,
        focus : Boolean,
        recipe : Object,
        resourceReturn : Number,
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
}

#crafting-row__materials {
    display: flex;
    flex-direction: row;
}

</style>