import {ref, computed, readonly} from 'vue'
import {initialRecipes} from "@/data/recipes.js";

const recipes = ref(initialRecipes.map(item => ({...item})))
let nextId = Math.max(0, ...recipes.value.map(item => item.id)) + 1
const completedCount = computed(() =>
    recipes.value.filter(item => item.completed).length
)

const totalMinutes = computed(() =>
    recipes.value.reduce((total, item) => total + item.cookTime + item.prepTime, 0)
)

// Turn a multi-line string into an array of trimmed, non-empty lines
function splitLines(text) {
    return text.split('\n').map(line => line.trim()).filter(Boolean)
}

function saveRecipe(id, rawName, rawDescription, rawMinutesPrep, rawMinutesCook, rawIngredients = '', rawSteps = '', category = 'Baking') {
    const name = rawName.trim()
    const description = rawDescription.trim()
    const prepTime = Number(rawMinutesPrep)
    const cookTime = Number(rawMinutesCook)
    const ingredients = splitLines(rawIngredients)
    const steps = rawSteps.trim()

    if (!name) return 'Please enter a recipe name.'

    if (name.length > 60) return 'Use no more than 60 characters for the name.'

    if (!description) return 'Please enter a description.'

    if (description.length > 300) return 'Use no more than 300 characters for the description.'

    if (!Number.isInteger(prepTime) || prepTime < 1 || prepTime > 600) {
        return 'Enter a whole number from 1 to 600 minutes for prep time.'
    }

    if (!Number.isInteger(cookTime) || cookTime < 0 || cookTime > 600) {
        return 'Enter a whole number from 0 to 600 minutes for cook time.'
    }

    if (ingredients.length === 0) return 'Please add at least one ingredient.'

    if (!steps) return 'Please add the recipe steps.'

    if (id === null) {
        recipes.value.push({
            id: nextId++,
            name,
            description,
            prepTime,
            cookTime,
            ingredients,
            steps,
            category,
            completed: false
        })
    } else {
        const recipe = recipes.value.find(item => item.id === id)
        if (!recipe) return 'This recipe is no longer available.'
        recipe.name = name
        recipe.description = description
        recipe.prepTime = prepTime
        recipe.cookTime = cookTime
        recipe.ingredients = ingredients
        recipe.steps = steps
        recipe.category = category
    }
    return ''
}

function removeRecipe(id) {
    recipes.value = recipes.value.filter(item => item.id !== id)
}

function toggleRecipe(id) {
    const recipe = recipes.value.find(item => item.id === id)
    if (recipe) recipe.completed = !recipe.completed
}

// This single object is shared by every caller in this browser app.
const recipeStore = {
    recipes: readonly(recipes),
    completedCount,
    totalMinutes,
    progressPercent,
    saveRecipe,
    removeRecipe,
    toggleRecipe,
    clearCompleted
}

export function useRecipes() {
    return recipeStore
}