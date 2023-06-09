<template>
    <ConstructionNode v-for="item of recipe" :key="recipe.indexOf(item)" :title="item['title']" :price="item['price']" :quantity="item['quantity']"></ConstructionNode>
</template>

<script setup>
    import ConstructionNode from './ConstructionNode.vue';
    import { defineProps } from 'vue';


    defineProps({
        recipe : Array,
    })

</script>