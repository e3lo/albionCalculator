<template>
    <img :src="link" id="icon">
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { defineProps} from 'vue';

const props = defineProps ({
    internalName : String
})

const link  = computed(() => {
    return require(`../assets/gameIcons/${props.internalName}.png`)
})


</script>

<style scoped>
    #icon {
        width : 4em
    }
</style>