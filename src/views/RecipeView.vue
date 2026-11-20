<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useRecipes } from '@/stores/recipeStore.js'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { recipes, stepLines, toggleStep } = useRecipes()
const recipe = computed(() => recipes.value.find(r => r.id === id.value))

// Split the steps text into lines for display
const steps = computed(() => (recipe.value ? stepLines(recipe.value.steps) : []))

// Ingredient ticks are kept in the component, so they reset when you leave the page
const haveIngredients = ref([])
function toggleIngredient(index) {
  if (haveIngredients.value.includes(index)) {
    haveIngredients.value = haveIngredients.value.filter(i => i !== index)
  } else {
    haveIngredients.value.push(index)
  }
}

// Progress bar: percentage of steps ticked off
const progress = computed(() => {
  if (!recipe.value || steps.value.length === 0) return 0
  return Math.round((recipe.value.doneSteps.length / steps.value.length) * 100)
})
</script>

<template>
  <section v-if="recipe" class="recipe-view" aria-labelledby="recipe-heading">
    <div class="card recipe-main">
      <h2 id="recipe-heading">Recipe: {{ recipe.name }}</h2>
      <p>{{ recipe.prepTime }} min prep · {{ recipe.cookTime }} min cook · {{ recipe.category }}</p>
      <h4>Description</h4>
      <p class="description">{{ recipe.description }}</p>

      <div v-for="(line, i) in steps" :key="i" class="step">
        <div class="step-header">
          <input
              type="checkbox"
              class="check"
              :checked="recipe.doneSteps.includes(i)"
              @change="toggleStep(recipe.id, i)"
          />
        </div>
        <p class="step-text">{{ line }}</p>
      </div>
    </div>

    <div class="card progress-card">
      <h2>Progress bar:</h2>
      <label for="recipe-progress">{{ progress }}% of steps complete</label>
      <div id="recipe-progress" class="progress-track">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>

      <p class="small">Ingredients:</p>
      <label v-for="(ing, i) in recipe.ingredients" :key="i" class="ingredient">
        <input
            type="checkbox"
            class="check"
            :checked="haveIngredients.includes(i)"
            @change="toggleIngredient(i)"
        />
        <span class="small">{{ ing }}</span>
      </label>
      <p><RouterLink to="/">Back to recipes</RouterLink></p>
    </div>
  </section>

  <section v-else class="panel">
    <p>This recipe is no longer available.</p>
    <p><RouterLink to="/">Back to recipes</RouterLink></p>
  </section>
</template>