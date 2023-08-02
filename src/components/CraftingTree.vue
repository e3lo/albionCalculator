<template>
    <div id="crafting-row">
        <div id="crafting-row__materials">
            <ConstructionNode v-for="[key, value] of Object.entries(props.recipe)" @set-price="updatePrice" :key="key" v-bind="value" :title="key"></ConstructionNode>
        </div>
        <div id="crafting-row__results">
            <h3> {{ title }} </h3>
            <IconCreator :internal-name="props.internalName"></IconCreator>
            <table id="crafting-row__table">
                <tr>
                    <td><b>Profit</b></td>
                    <td>${{ profit }}</td>
                </tr>
                <tr>
                    <td><b>Focus cost</b></td>
                    <td>111</td>
                </tr>
                <tr>
                    <td><b>Last updated</b></td>
                    <td>{{ updateTime }}Hrs</td>
                </tr>
                <tr>
                    <td><b>Total sales</b></td>
                    <td>${{ grossSales }}</td>
                </tr>
                <tr>
                    <td><b>Total cost</b></td>
                    <td>${{ totalCost }}</td>
                </tr>
            </table>
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
    import IconCreator from './IconCreator.vue';

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

    //Passing on price changes
    function updatePrice(newPrice, item) {
        console.log(newPrice)
        console.log(item)
    }

    // Time delay
    const updateTime = computed(() => {
        let updateDate = new Date(props.time)
        let currentTime = new Date()

        let timeDifference = currentTime - updateDate // In ms
        return Math.round((timeDifference)/(1000*36000))
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
    margin-left: 1em;
    padding: 1em;
    background-color: azure;
}

#crafting-row__table {
    font-size: small;
}
</style>