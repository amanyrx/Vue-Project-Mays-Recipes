<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import SiteNav from './components/SiteNav.vue'

const route = useRoute()

const categories = [
  'Baking',
  'Recipes',
  'Healthy Eating',
  'Techniques & Tips',
  'Seasonal & Occasions'
]

</script>

<template>
  <div class="page-frame">
    <!-- HEADER -->
    <header class="site-header">
      <RouterLink to="/" class="logo">May's Recipes</RouterLink>
      <nav class="top-nav" aria-label="Site links">
        <a href="#">More Articles</a>
        <a href="#">Newsletter</a>
        <a href="#">Account</a>
      </nav>
    </header>
    <SiteNav />
    <div class="body-row">
      <!-- SIDEBAR -->
      <aside class="sidebar">
        <h2>More Articles</h2>
        <ul>
          <li v-for="c in categories" :key="c">
            <a href="#">{{ c }}</a>
          </li>
        </ul>
        <a href="#" class="side-link">Newsletter</a>
        <a href="#" class="side-link">Account</a>
        <button class="subscribe-btn">Subscribe to newsletter</button>
      </aside>

      <!-- PAGE CONTENT: your router renders HomePage / RecipeView here -->
      <main id="main-content" class="content">
        <RouterView />
      </main>
    </div>

    <!-- FOOTER -->
    <footer class="site-footer">
      <a href="#">Contact Us</a>
    </footer>
  </div>
</template>