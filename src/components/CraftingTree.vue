<template>
    <div id="crafting-row">
        <div id="crafting-row__materials">
            <ConstructionNode v-for="item of props.recipe" :key="props.recipe.indexOf(item)" :title="item['title']" :price="item['price']" :quantity="item['quantity']"></ConstructionNode>
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
        recipe : Array,
    })

    // Calculate profits
    const albionTax = 0.04
    let baseCraftingCost = 0

    for (let item of props.recipe) {
            baseCraftingCost += item['price'] * item['quantity']
    }

    let craftingStationCost = props.itemValue * 0.1125 * (props.craftingCost / 100)

    let totalCost = computed(() => {
        return baseCraftingCost + craftingStationCost
    })

    let grossSales = computed(() => {
        (props.sellPrice * (1 - albionTax)) * 10
    })

    let profit = computed(() => {
        return (props.sellPrice * (1 - albionTax)) * 10 - baseCraftingCost + craftingStationCost
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