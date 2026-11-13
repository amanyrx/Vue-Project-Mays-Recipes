<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
const route = useRoute()

const recipes = ref([
  { id: 1, title: 'Pandan Chiffon Cake', image: '' },
  { id: 2, title: 'Recipe title', image: '' },
  { id: 3, title: 'Recipe title', image: '' }
])
</script>

<template>
  <section>
    <h2 class="content-title">Featured Recipes</h2>

    <RouterLink
        v-for="r in recipes"
        :key="r.id"
        :to="`/recipe/${r.id}`"
        class="card recipe-card"
    >
      <div class="thumb">
        <img v-if="r.image" :src="r.image" :alt="r.title" />
      </div>
      <h3>{{ r.title }}</h3>
    </RouterLink>
  </section>
</template>