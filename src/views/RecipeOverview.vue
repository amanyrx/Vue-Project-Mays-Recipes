<script setup>
import { RouterLink } from 'vue-router'
import { useRecipes } from '../stores/recipeStore.js'
import {computed, ref} from "vue";

const { recipes, completedCount, totalMinutes, progressPercent } = useRecipes()

const searchQuery = ref('')
const selectedCategory = ref('') // Empty string means all categories.
const categories = computed(() =>
    [...new Set(recipes.value.map(item => item.category))].sort()
)

const filteredRecipes = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  return recipes.value.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(query)
    const matchesCategory = selectedCategory.value === '' ||
        item.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

function clearFilters() {
  searchQuery.value = ''
  selectedCategory.value = ''
}
</script>

<template>
  <section class="panel" aria-labelledby="overview-heading">

    <h1 id="overview-heading" tabindex="-1">Your recipes</h1>
    <p>{{ completedCount }} of {{ recipes.length }} recipes completed</p>
<!--    <p>{{ totalMinutes }} minutes in total</p>-->
<!--    <label for="overview-progress">{{ progressPercent }}% of steps complete</label>-->
<!--    <progress id="overview-progress" :value="progressPercent" max="100">-->
<!--      {{ progressPercent }}%-->
<!--    </progress>-->

    <h1 tabindex="-1">Find a recipe</h1>
    <label for="exercise-search">Search recipe names</label>
    <input id="exercise-search" v-model="searchQuery" type="search">
    <label for="exercise-category">Category</label>
    <select id="exercise-category" v-model="selectedCategory">
      <option value="">All categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <button type="button" @click="clearFilters">Clear filters</button>
    <p role="status">{{ filteredRecipes.length }} of {{ recipes.length }} recipes shown.</p>
    <p v-if="recipes.length === 0">No recipes yet. Add one in Manage recipes.</p>
    <ul v-else-if="filteredRecipes.length" class="exercise-list">
      <li v-for="recipe in filteredRecipes" :key="recipes.id" class="exercise">
        <div class="thumb" v-if="recipe.image">
          <img :src="recipe.image" :alt="recipe.name">
        </div>
        <div class="exercise-info">
          <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }">
            {{ recipe.name }}
          </RouterLink>
          <p>{{ recipe.category }} · {{ recipe.prepTime + recipe.cookTime }} minutes</p>
        </div>
      </li>
    </ul>
    <p v-else>No recipes match. Change your search or clear the filters.</p>

    <p v-if="recipes.length === 0" class="empty-state">
      No recipes yet. Open Manage recipes to add one.
    </p>
<!--    <ul v-else class="recipe-list">-->
<!--      <li v-for="recipe in recipes" :key="recipe.id" class="recipe">-->
<!--        <div>-->
<!--          <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }">-->
<!--            {{ recipe.name }}-->
<!--          </RouterLink>-->
<!--          <p>{{ recipe.prepTime + recipe.cookTime }} minutes ·-->
<!--            {{ recipe.doneSteps.length }} steps done</p>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
    <p><RouterLink to="/manage">Manage recipes</RouterLink></p>
  </section>
</template>