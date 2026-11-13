import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import RecipeView from '../views/RecipeView.vue'
// import ManageWorkoutView from '../views/ManageWorkoutView.vue'
// import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Homepage },
        { path: '/recipe/:id', name: 'recipe', component: RecipeView },
    ],
    scrollBehavior() {
        return { top: 0 }
    }
})
export default router
