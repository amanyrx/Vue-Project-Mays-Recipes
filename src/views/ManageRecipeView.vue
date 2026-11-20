<script setup>
import { ref } from 'vue'
import RecipeList from '../components/RecipeList.vue'
import { useRecipes } from '../stores/recipeStore.js'

const { recipes, totalMinutes, saveRecipe, removeRecipe } = useRecipes()

const editingId = ref(null)
const newName = ref('')
const newDescription = ref('')
const newPrep = ref(15)
const newCook = ref(30)
const newCategory = ref('Baking')
const newIngredients = ref('')
const newSteps = ref('')
const errorMessage = ref('')
const statusMessage = ref('')

function startEditing(id) {
  const recipe = recipes.value.find(item => item.id === id)

  if (!recipe) return
  editingId.value = id
  newName.value = recipe.name
  newDescription.value = recipe.description
  newPrep.value = recipe.prepTime
  newCook.value = recipe.cookTime
  newCategory.value = recipe.category
  newIngredients.value = recipe.ingredients.join('\n')
  newSteps.value = recipe.steps
  errorMessage.value = ''
  statusMessage.value = ''
}

function resetForm() {
  editingId.value = null
  newName.value = ''
  newDescription.value = ''
  newPrep.value = 15
  newCook.value = 30
  newCategory.value = 'Baking'
  newIngredients.value = ''
  newSteps.value = ''
  errorMessage.value = ''
}

function submitRecipe() {
  const wasEditing = editingId.value !== null
  const error = saveRecipe(
      editingId.value,
      newName.value,
      newDescription.value,
      newPrep.value,
      newCook.value,
      newIngredients.value,
      newSteps.value,
      newCategory.value
  )

  if (error) {
    errorMessage.value = error
    statusMessage.value = ''
    return
  }

  resetForm()
  statusMessage.value = wasEditing ? 'Changes saved.' : 'Recipe added.'
}

function cancelEditing() {
  resetForm()
  statusMessage.value = 'Edit cancelled. Saved recipe unchanged.'
}
</script>

<template>
  <section aria-labelledby="manage-heading">
    <h1 id="manage-heading" tabindex="-1">Manage recipes</h1>
<!--    <p>{{ totalMinutes }} minutes in total</p>-->
    <p role="status">{{ statusMessage }}</p>
    <div class="dashboard-grid">
      <section class="panel">
        <h2>{{ editingId === null ? 'Add a recipe' : 'Edit recipe' }}</h2>
        <form @submit.prevent="submitRecipe">
          <label for="recipe-name">Recipe name</label>
          <input id="recipe-name" v-model="newName" type="text"
                 maxlength="60" required>

          <label for="recipe-description">Description</label>
          <textarea id="recipe-description" v-model="newDescription"
                    maxlength="300" rows="3" required></textarea>

          <label for="recipe-category">Category</label>
          <select id="recipe-category" v-model="newCategory">
            <option value="Baking">Baking</option>
            <option value="Cooking">Cooking</option>
          </select>

          <label for="recipe-prep">Prep time in minutes</label>
          <input id="recipe-prep" v-model.number="newPrep"
                 type="number" min="1" max="600" step="1" required>

          <label for="recipe-cook">Cook time in minutes</label>
          <input id="recipe-cook" v-model.number="newCook"
                 type="number" min="0" max="600" step="1" required>

          <label for="recipe-ingredients">Ingredients (one per line)</label>
          <textarea id="recipe-ingredients" v-model="newIngredients"
                    rows="6" required></textarea>

          <label for="recipe-steps">Steps (one per line)</label>
          <textarea id="recipe-steps" v-model="newSteps"
                    rows="8" required></textarea>

          <button type="submit" class="primary-button">
            {{ editingId === null ? 'Add recipe' : 'Save changes' }}
          </button>

          <button v-if="editingId !== null" type="button"
                  class="secondary-button" @click="cancelEditing">Cancel</button>
          <p v-if="errorMessage" role="alert" class="error-message">
            {{ errorMessage }}
          </p>
        </form>
      </section>

      <section class="panel">
        <h2>Your recipes</h2>
        <RecipeList :recipes="recipes" :editing="editingId !== null"
                    @edit="startEditing" @remove="removeRecipe" />
      </section>
    </div>
  </section>
</template>