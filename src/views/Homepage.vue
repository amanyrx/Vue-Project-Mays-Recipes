<!--<script setup>-->
<!--import { ref } from 'vue'-->
<!--import { RouterLink, useRoute } from 'vue-router'-->
<!--const route = useRoute()-->

<!--const recipes = ref([-->
<!--  { id: 1, title: 'Pandan Chiffon Cake', image: '' },-->
<!--  { id: 2, title: 'Recipe title', image: '' },-->
<!--  { id: 3, title: 'Recipe title', image: '' }-->
<!--])-->
<!--</script>-->

<!--<template>-->
<!--  <section>-->
<!--    <h2 class="content-title">Featured Recipes</h2>-->

<!--    <RouterLink-->
<!--        v-for="r in recipes"-->
<!--        :key="r.id"-->
<!--        :to="`/recipe/${r.id}`"-->
<!--        class="card recipe-card"-->
<!--    >-->
<!--      <div class="thumb">-->
<!--        <img v-if="r.image" :src="r.image" :alt="r.title" />-->
<!--      </div>-->
<!--      <h3>{{ r.title }}</h3>-->
<!--    </RouterLink>-->
<!--  </section>-->
<!--</template>-->
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useRecipes } from '@/stores/recipeStore.js'

const { recipes } = useRecipes()

// Show only the first three on the homepage
const featured = computed(() => recipes.value.slice(0, 3))

// Placeholder articles, replace with your own data or store later
const articles = [
  { id: 1, title: 'Article title', summary: 'A short summary of the article.' },
  { id: 2, title: 'Article title', summary: 'A short summary of the article.' }
]
</script>

<template>
  <section>
    <h2 class="content-title">Featured Recipes</h2>

    <p v-if="featured.length === 0" class="empty-state">
      No recipes yet. Open Manage recipes to add one.
    </p>

    <RouterLink
        v-for="r in featured"
        :key="r.id"
        :to="{ name: 'recipe-detail', params: { id: r.id } }"
        class="card recipe-card"
    >
      <div class="thumb">
        <img v-if="r.image" :src="r.image" :alt="r.name" />
      </div>
      <h3>{{ r.name }}</h3>
    </RouterLink>

    <p><RouterLink to="/recipes">View all recipes</RouterLink></p>
  </section>

  <section>
    <h2 class="content-title">Latest Articles</h2>
    <article v-for="a in articles" :key="a.id" class="card">
      <h3>{{ a.title }}</h3>
      <p>{{ a.summary }}</p>
    </article>
  </section>
</template>