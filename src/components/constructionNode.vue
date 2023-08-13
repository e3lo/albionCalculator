<template>
    <div id="construction-block">
        <h3> {{ title }} </h3>
        <IconCreator :internal-name="props.title" icon-type="gameIcons"></IconCreator>
        <table id="construction-block__table">
                <tr>
                    <td><b>Price</b></td>
                    <td><input class="construction-block__table__input" id="setPrice" type="number" :value="price" @change="sendPriceChange()"/></td> 
                </tr>
                <tr>
                    <td><b>Quantity</b></td>
                    <td>{{ quantity }}</td>
                </tr>
                <tr>
                    <td><b>Last updated</b></td>
                    <td>{{ updateTime }}Hrs</td>
                </tr>
        </table>
    </div>
</template>

<script setup>
    import { computed } from '@vue/reactivity';
    import { defineProps, defineEmits } from 'vue';
    import IconCreator from './IconCreator.vue';

    const props = defineProps({
        title: String,
        price: Number,
        quantity: Number,
        time: String,
    })

    const emit = defineEmits(['setPrice'])

    // Calculates time difference between now and last updated
    const updateTime = computed(() => {
        let updateDate = new Date(props.time)
        let currentTime = new Date()

        let timeDifference = currentTime - updateDate // In ms
        return Math.round((timeDifference)/(1000*36000))
    })
    
    // Sends an emit for price change
    function sendPriceChange() {
        let newPrice = document.getElementById('setPrice').value // Can not use getelementbyid here as multiple items are gettign assinged same ID
        console.log(`boop price ${newPrice}`)
        emit('setPrice', newPrice, props.title)
    }
</script>

<style>
    #construction-block {
        background-color: beige;
        color: black;
        padding: 1em;
    }

    #construction-block__table {
        font-size: small;
        text-align: left;
    }

    .construction-block__table__input{
        width: 4em;
    }
</style>