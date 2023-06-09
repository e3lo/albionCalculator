<template>
    <div id="construction-block">
        <h3> {{ title }} </h3>
        <p> {{ price }}</p>
        <p> {{ quantity }}</p>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: String,
        price: Number,
        quantity: Number
    })
</script>

<style>
    #construction-block {
        background-color: black;
        color: red;
    }
</style>