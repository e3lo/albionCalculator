<template>
    <div class="recipe-list__container">
        <div class="recipe-list__header" @click="changeDropdownState()">
            <IconCreator :internal-name="iconName" icon-type="gameIcons"></IconCreator>
            <h3>{{ type }}</h3>
            <IconCreator internal-name="expand_down" icon-type="icons" class="recipe-list__icon"></IconCreator>
        </div>
        <div class="recipe-list__item" v-show="dropdownState" id="recipes" v-for="items in recipeFamily(type)" :key="items.internalName">
            <button class="recipe-list__button" @click="$emit('addRecipe', items)">
                <ItemTreeSelector :title="items.title" :internal-name="items.internalName"></ItemTreeSelector>
            </button>
        </div>
    </div>
</template>

<script setup>
// Need addRecipe emit

    import { defineProps, ref } from 'vue';
    import IconCreator from '@/components/IconCreator.vue';
    import ItemTreeSelector from './ItemTreeSelector.vue';
    import * as recipe from '@/recipes/cookingRecipes';

    defineProps({
        type : String,
        iconName : String,
    })

    const dropdownState = ref(false)

    function changeDropdownState() {
        dropdownState.value = !dropdownState.value
    }

    function recipeFamily(type) {
        return recipe.COOKING_TREE[type]
    }

</script>

<style scoped>
.recipe-list__container{
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 1.25rem;
    border: 2px solid rgba(255, 255, 255, 0.40);
    padding: 1rem;
    height: min-content;
}

.recipe-list__header {
    display: flex;
    justify-content: space-between;
}

.recipe-list__icon {
    width: 2em;
    margin-left: auto;
}

.recipe-list__item{
    padding-top: 1em;
    display: block;
}

.recipe-list__button {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    width: 100%;
    padding: 1em 0.5em 1em 0.5em;
}

.recipe-list__button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>