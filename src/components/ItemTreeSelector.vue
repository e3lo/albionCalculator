<template>
    <div class="btn" @click="clicked">
        <IconCreator :internalName="internalName" icon-type="gameIcons"></IconCreator>
        <h3>
            {{ title }}
        </h3>

        <div class="stats">
            <div class="pill"><b>Tier 5</b></div>
            <div class="pill"><b>Enchant 6</b></div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    import IconCreator from '@/components/IconCreator.vue';

    defineProps({
        title : String,
        internalName : String,
    })

    function clicked() {
        console.log("clicked") // Cool animation
    }

</script>

<style scoped>
.btn {
    width: 100%;
    size: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
}

h3 {
    color: white;
    margin-right: auto;
}

.stats {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: right;
}

.pill {
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    background: #D9D9D9;
}
</style>