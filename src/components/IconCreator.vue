<template>
    <img :src="link" class="largeIcon">
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { defineProps } from 'vue';

const props = defineProps ({
    internalName : String,
    iconType : String,
})

const link  = computed(() => {
    try {
        return require(`../assets/${props.iconType}/${props.internalName}.svg`)
    } catch {
        return require(`../assets/${props.iconType}/${props.internalName}.png`)
    }    
})

</script>

<style scoped>
    .largeIcon {
        width : 4em;
    }

    .smallIcon {
        width : 2em;
    }
</style>