<template>
    <div class="btn" @click="clicked">
        <IconCreator :internalName="internalName" icon-type="gameIcons"></IconCreator>
        <h3>
            {{ title }}
        </h3>

        <div class="stats">
            <div class="pill"><b>{{ tier }}</b></div>
            <div class="pill"><b>Enchant {{ enchant }}</b></div>
        </div>
    </div>
</template>

<script setup>
    import { computed, defineProps } from 'vue';
    import IconCreator from '@/components/IconCreator.vue';

    const props = defineProps({
        title : String,
        internalName : String,
    })

    const tier = computed(() => {
        let data = props.internalName.split("_")
        return data[0]
    })

    const enchant = computed(() => {
        if (props.internalName.includes('@')) {
            let data = props.internalName.split("@")
            return data[1]
        } else {
            return 0
        }
        
        
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