import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import RecipeView from '../views/RecipeView.vue'
import ManageRecipeView from "@/views/ManageRecipeView.vue";
import RecipeOverview from "@/views/RecipeOverview.vue";
// import ManageWorkoutView from '../views/ManageWorkoutView.vue'
// import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Homepage },
        { path: '/manage', name: 'manage', component: ManageRecipeView },
        { path: '/recipes', name: 'recipes', component: RecipeOverview },
        { path: '/recipe/:id', name: 'recipe-detail', component: RecipeView },
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})
export default router
