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
        premium : Boolean,
        focus : Boolean,
        recipe : Array,
    })

    // Calculate profits
    let albionTax = computed(() => {
        return props.premium ? 0.04 : 0.08
    }) 

    let baseCraftingCost = computed(() => {
        let cost = 0
        for (let item of props.recipe) {
            cost += item['price'] * item['quantity']
        }

        return cost
    })

    let craftingStationCost = computed(() => {
        return props.itemValue * 0.1125 * (props.craftingCost / 100)
    })

    let totalCost = computed(() => {
        return baseCraftingCost.value + craftingStationCost.value
    })

    let grossSales = computed(() => {
        return (props.sellPrice * (1 - albionTax.value)) * 10
    })

    let profit = computed(() => {
        return (props.sellPrice * (1 - albionTax.value)) * 10 - baseCraftingCost.value + craftingStationCost.value
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