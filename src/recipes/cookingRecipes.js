// Recipes

import { reactive } from "vue"

const T8_MEAL_STEW = reactive({
    'title' : "Beef Stew",
    'internalName' : 'T8_MEAL_STEW',
    'itemValue' : 1060,
    'sellPrice' : 5600,
    'time' : '',

    'recipe' : {
        'T8_MEAT' : {
            'price' : 300,
            'quantity' : 72,
            'time' : '',
        },
        'T8_PUMPKIN' : {
            'price' : 400,
            'quantity' : 36,
            'time' : '',
        },
        'T4_BREAD' : {
            'price' : 344,
            'quantity' : 16,
            'time' : '',
        },
    } 
})

const T7_MEAL_OMELETTE = reactive({
    'title' : "Pork Omelette",
    'internalName' : 'T7_MEAL_OMELETTE',
    'itemValue' : 1060,
    'sellPrice' : 5400,
    'time' : '',

    'recipe' : {
        'T7_MEAT' : {
            'price' : 300,
            'quantity' : 72,
            'time' : '',
        },
        'T7_CORN' : {
            'price' : 400,
            'quantity' : 36,
            'time' : '',
        },
        'T5_EGG' : {
            'price' : 344,
            'quantity' : 16,
            'time' : '',
        },
    }  
})

const T7_MEAL_OMELETTE_1 = reactive({
    'title' : "Pork Omelette",
    'internalName' : 'T7_MEAL_OMELETTE@1',
    'itemValue' : 1060,
    'sellPrice' : 5400,
    'time' : '',

    'recipe' : {
        'T7_MEAT' : {
            'price' : 300,
            'quantity' : 72,
            'time' : '',
        },
        'T7_CORN' : {
            'price' : 400,
            'quantity' : 36,
            'time' : '',
        },
        'T5_EGG' : {
            'price' : 344,
            'quantity' : 16,
            'time' : '',
        },
        'T1_FISHSAUCE_LEVEL1' : {
            'price' : 1000,
            'quantity' : 90,
            'time' : '',
        },
    }  
})

const T7_MEAL_OMELETTE_AVALON_1 = reactive({
    'title' : "Pork Omelette",
    'internalName' : 'T7_MEAL_OMELETTE_AVALON@1',
    'itemValue' : 1080,
    'sellPrice' : 5400,
    'time' : '',

    'recipe' : {
        'T7_MEAT' : {
            'price' : 300,
            'quantity' : 72,
            'time' : '',
        },
        'T8_MILK' : {
            'price' : 400,
            'quantity' : 36,
            'time' : '',
        },
        'T5_EGG' : {
            'price' : 344,
            'quantity' : 16,
            'time' : '',
        },
        'T1_FISHSAUCE_LEVEL1' : {
            'price' : 1000,
            'quantity' : 90,
            'time' : '',
        },
        'QUESTITEM_TOKEN_AVALON' : {
            'price' : 1000,
            'quantity' : 90,
            'time' : '',
        },
    }  
})

const COOKING_TREE = reactive({
    'STEW' : [
        T8_MEAL_STEW,
    ],
    'OMELETTE' : [
        T7_MEAL_OMELETTE,
        T7_MEAL_OMELETTE_1,
        T7_MEAL_OMELETTE_AVALON_1,
    ]
})

export { COOKING_TREE, T8_MEAL_STEW, T7_MEAL_OMELETTE, T7_MEAL_OMELETTE_1, T7_MEAL_OMELETTE_AVALON_1 }