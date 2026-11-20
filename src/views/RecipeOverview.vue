<script setup>
import { RouterLink } from 'vue-router'
import { useRecipes } from '../stores/recipeStore.js'

const { recipes, completedCount, totalMinutes, progressPercent } = useRecipes()
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

    <p v-if="recipes.length === 0" class="empty-state">
      No recipes yet. Open Manage recipes to add one.
    </p>
    <ul v-else class="exercise-list">
      <li v-for="recipe in recipes" :key="recipe.id" class="exercise">
        <div>
          <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }">
            {{ recipe.name }}
          </RouterLink>
          <p>{{ recipe.prepTime + recipe.cookTime }} minutes ·
            {{ recipe.doneSteps.length }} steps done</p>
        </div>
      </li>
    </ul>
    <p><RouterLink to="/manage">Manage recipes</RouterLink></p>
  </section>
</template>