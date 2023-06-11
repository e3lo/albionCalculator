// Recipes

import { reactive } from "vue"

const T8_MEAL_STEW = reactive({
    'title' : "Beef Stew",
    'internalName' : 'T8_MEAL_STEW',
    'itemValue' : 1060,
    'craftingCost' : 300,
    'sellPrice' : 5600,

    'recipe' : [
    {
        'title' : "Raw beef",
        'internalName' : 'T8_MEAT',
        'price' : 300,
        'quantity' : 72,
    },
    {
        'title' : "Pumpkin",
        'internalName' : 'T8_PUMPKIN',
        'price' : 400,
        'quantity' : 36,
    },
    {
        'title' : "Bread",
        'internalName' : 'T4_BREAD',
        'price' : 344,
        'quantity' : 16,
    }],    
})

const T7_MEAL_OMELETTE = reactive({
    'title' : "Pork Omelette",
    'internalName' : 'T7_MEAL_OMELETTE',
    'itemValue' : 1060,
    'craftingCost' : 300,
    'sellPrice' : 5400,

    'recipe' : [
    {
        'title' : "Raw Pork",
        'internalName' : 'T7_MEAT',
        'price' : 300,
        'quantity' : 72,
    },
    {
        'title' : "Corn",
        'internalName' : 'T7_CORN',
        'price' : 400,
        'quantity' : 36,
    },
    {
        'title' : "Goose Eggs",
        'internalName' : 'T5_EGG',
        'price' : 344,
        'quantity' : 16,
    }],    
})

export { T8_MEAL_STEW, T7_MEAL_OMELETTE }