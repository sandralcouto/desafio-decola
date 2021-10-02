import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jogos from '../views/Jogos.vue'
import About from '../views/About.vue'
import SetembroAmarelo from '../views/SetembroAmarelo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/jogos',
    component: Jogos
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/setembroamarelo',
    component: SetembroAmarelo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
