<template>
    <div id="construction-block">
        <h3> {{ title }} </h3>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: String,
        price: Number
    })
</script>

<style>
    #construction-block {
        background-color: black;
        color: red;
    }
</style>