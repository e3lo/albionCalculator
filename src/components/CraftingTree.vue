<template>
    <div id="crafting-row">
        <div id="crafting-row__materials">
            <ConstructionNode v-for="item of props.recipe" :key="props.recipe.indexOf(item)" :title="item['title']" :price="item['price']" :quantity="item['quantity']"></ConstructionNode>
        </div>
        <div id="crafting-row__results">
            Total Cost : {{ totalCost }}
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
        recipe : Array,
    })

    // Calculate profits
    // const albionTax = [0.08, 0.04]
    let baseCraftingCost = 0
    
    for (let item of props.recipe) {
            baseCraftingCost += item['price'] * item['quantity']
    }

    let craftingStationCost = props.itemValue * 0.1125 * (props.craftingCost / 100)

    let totalCost = computed(() => {
        return baseCraftingCost + craftingStationCost
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