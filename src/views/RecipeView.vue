<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const recipe = ref({
  title: 'Pandan Chiffon Cake',
  description: 'A light, fluffy chiffon cake flavoured with fresh pandan.',
  steps: [
    { text: 'Preheat oven to 180 degrees', done: false },
    { text: 'Whisk the egg yolks and pandan juice', done: false }
  ],
  ingredients: [
    { name: '6 eggs', have: false },
    { name: '120g flour', have: false },
    { name: '100g sugar', have: false }
  ]
})

// Progress bar: percentage of steps ticked off
const progress = computed(() => {
  const steps = recipe.value.steps
  if (steps.length === 0) return 0
  return Math.round((steps.filter(s => s.done).length / steps.length) * 100)
})
</script>

<template>
  <section class="recipe-view">
    <div class="card recipe-main">
      <h2>Recipe: {{ recipe.title }}</h2>
      <h4>Description</h4>
      <p class="description">{{ recipe.description }}</p>

      <div v-for="(step, i) in recipe.steps" :key="i" class="step">
        <div class="step-header">
          <span>Step {{ i + 1 }}:</span>
          <input v-model="step.done" type="checkbox" class="check" />
        </div>
        <p class="step-text">{{ step.text }}</p>
      </div>
    </div>

    <div class="card progress-card">
      <h2>Progress bar:</h2>
      <div class="progress-track">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <p class="small">Ingredients:</p>
      <label v-for="(ing, i) in recipe.ingredients" :key="i" class="ingredient">
        <input v-model="ing.have" type="checkbox" class="check" />
        <span class="small">{{ ing.name }}</span>
      </label>
    </div>
  </section>
</template>