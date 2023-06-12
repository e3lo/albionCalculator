// Recipes

import { reactive } from "vue"

const bonusCity = "Caerleon"

const T8_MEAL_STEW = reactive({
    'title' : "Beef Stew",
    'internalName' : 'T8_MEAL_STEW',
    'itemValue' : 1060,
    'craftingCost' : 300,
    'sellPrice' : 5600,

    'recipe' : {
        'T8_MEAT' : {
            'price' : 300,
            'quantity' : 72,
        },
        'T8_PUMPKIN' : {
            'price' : 400,
            'quantity' : 36,
        },
        'T4_BREAD' : {
            'price' : 344,
            'quantity' : 16,
        },
    } 
})

const T7_MEAL_OMELETTE = reactive({
    'title' : "Pork Omelette",
    'internalName' : 'T7_MEAL_OMELETTE',
    'itemValue' : 1060,
    'craftingCost' : 300,
    'sellPrice' : 5400,

    'recipe' : {
        'T7_MEAT' : {
            'price' : 300,
            'quantity' : 72,
        },
        'T7_CORN' : {
            'price' : 400,
            'quantity' : 36,
        },
        'T5_EGG' : {
            'price' : 344,
            'quantity' : 16,
        },
    }  
})

export { bonusCity, T8_MEAL_STEW, T7_MEAL_OMELETTE }