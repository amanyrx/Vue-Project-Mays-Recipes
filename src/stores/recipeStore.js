import { ref, computed, readonly } from 'vue'
import { initialRecipes } from '@/data/recipes.js'

// CHANGED: doneSteps replaces the completed flag
const recipes = ref(initialRecipes.map(item => ({ ...item, doneSteps: [] })))
let nextId = Math.max(0, ...recipes.value.map(item => item.id)) + 1

// Turn a multi-line string into an array of trimmed, non-empty lines
function splitLines(text) {
    return text.split('\n').map(line => line.trim()).filter(Boolean)
}

// NEW: used by the detail page to display and count the steps
function stepLines(text) {
    return splitLines(text)
}

// CHANGED: a recipe is completed when every step is ticked
const completedCount = computed(() =>
    recipes.value.filter(r => {
        const total = stepLines(r.steps).length
        return total > 0 && r.doneSteps.length === total
    }).length
)

const totalMinutes = computed(() =>
    recipes.value.reduce((total, item) => total + item.cookTime + item.prepTime, 0)
)

// NEW: this was exported but never defined
const progressPercent = computed(() => {
    const totalSteps = recipes.value.reduce((sum, r) => sum + stepLines(r.steps).length, 0)
    if (totalSteps === 0) return 0
    const doneSteps = recipes.value.reduce((sum, r) => sum + r.doneSteps.length, 0)
    return Math.round(doneSteps / totalSteps * 100)
})

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
            doneSteps: []
        })
    } else {
        const recipe = recipes.value.find(item => item.id === id)
        if (!recipe) return 'This recipe is no longer available.'
        recipe.name = name
        recipe.description = description
        recipe.prepTime = prepTime
        recipe.cookTime = cookTime
        recipe.ingredients = ingredients
        if (recipe.steps !== steps) recipe.doneSteps = []
        recipe.steps = steps
        recipe.category = category
    }
    return ''
}

function removeRecipe(id) {
    recipes.value = recipes.value.filter(item => item.id !== id)
}

// CHANGED: replaces toggleRecipe, ticks one step instead of the whole recipe
function toggleStep(recipeId, index) {
    const recipe = recipes.value.find(item => item.id === recipeId)
    if (!recipe) return
    if (recipe.doneSteps.includes(index)) {
        recipe.doneSteps = recipe.doneSteps.filter(i => i !== index)
    } else {
        recipe.doneSteps.push(index)
    }
}

// This single object is shared by every caller in this browser app.
const recipeStore = {
    recipes: readonly(recipes),
    completedCount,
    totalMinutes,
    progressPercent,
    stepLines,
    saveRecipe,
    removeRecipe,
    toggleStep
}

export function useRecipes() {
    return recipeStore
}