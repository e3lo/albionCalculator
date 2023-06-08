<template>
    <div>
        <h1> Home component</h1>
        <ConstructionNode title="Hello World" :price="200"/>
    </div>
</template>

<script setup>
import ConstructionNode from "../components/ConstructionNode.vue";

</script>