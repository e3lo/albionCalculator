<template>
    <div id="construction-block">
        <h3> {{ title }} </h3>
        <IconCreator :internal-name="props.title"></IconCreator>
        <p> ${{ price }}</p>
        <p> {{ quantity }}</p>
        <p> {{ updateTime }} Hrs</p>
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
        return Math.round((timeDifference)/(1000*3600))
    })
</script>

<style>
    #construction-block {
        background-color: beige;
        color: black;
        padding: 1em;
    }
</style>