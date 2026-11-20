<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  recipes: { type: Array, required: true },
  editing: { type: Boolean, default: false }
})
const emit = defineEmits(['edit', 'remove'])
</script>

<template>
  <p v-if="recipes.length === 0" class="empty-state">
    No recipes yet. Add one to get started.
  </p>
  <ul v-else class="exercise-list">
    <li v-for="recipe in recipes" :key="recipe.id" class="exercise">
      <div class="exercise-details">
        <span>
          <RouterLink :to="{ name: 'recipe-detail', params: { id: recipe.id } }">
            <strong>{{ recipe.name }}</strong>
          </RouterLink>
          <small>{{ recipe.prepTime + recipe.cookTime }} minutes · {{ recipe.category }}</small>
        </span>
      </div>
      <button type="button" class="secondary-button"
              :disabled="editing" @click="emit('edit', recipe.id)">
        Edit
      </button>
      <button type="button" class="remove-button"
              :disabled="editing" @click="emit('remove', recipe.id)"
              :aria-label="'Remove ' + recipe.name">
        Remove
      </button>
    </li>
  </ul>
</template>