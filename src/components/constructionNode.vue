<template>
    <div id="construction-block">
        <h3> {{ title }} </h3>
        <IconCreator :internal-name="props.title"></IconCreator>
        <table id="construction-block__table">
                <tr>
                    <td><b>Price</b></td>
                    <td>${{ price }}</td>
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
    import { defineProps } from 'vue';
    import IconCreator from './IconCreator.vue';

    const props = defineProps({
        title: String,
        price: Number,
        quantity: Number,
        time: String,
    })

    const updateTime = computed(() => {
        let updateDate = new Date(props.time)
        let currentTime = new Date()

        let timeDifference = currentTime - updateDate // In ms
        return Math.round((timeDifference)/(1000*36000))
    })
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
</style>