import Vue from 'vue' 
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jogos from '../views/Jogos.vue'
import About from '../views/About.vue'
import SetembroAmarelo from '../views/SetembroAmarelo.vue'
import Anime from '../views/Anime.vue'
import Sorteado from '../views/Sorteado.vue'

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
  },
  {
    path: '/anime',
    component: Anime
  },
  {
    path: '/sorteado',
    component: Sorteado
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
