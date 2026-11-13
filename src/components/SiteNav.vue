<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="site-nav" aria-label="Main navigation">
    <RouterLink to="/" exact-active-class="nav-current">Home</RouterLink>
    <RouterLink to="/manage" exact-active-class="nav-current">Manage recipes</RouterLink>
  </nav>
</template>