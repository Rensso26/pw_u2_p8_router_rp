import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import PeliculaView from '../views/PeliculaView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'
import PokemonView from '../views/PokemonView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
  {
    path: '/tabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },
  {
    path: '/pelicula',
    name: 'peliculaView',
    component: PeliculaView
  },
  {
    path: '/pokemon',
    name: 'pokemonView',
    component: PokemonView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
    path: '/card',
    name: 'CardVue',
    component: () => import(/* webpackChunkName: "ContadorVue" */ '../views/CardView.vue')
  },
  {
    path: '/contador',
    name: 'ContadorVue',
    component: () => import(/* webpackChunkName: "ContadorVue" */ '../views/ContadorView.vue')
  },
  {
    path: '/pregunta',
    name: 'PreguntaVue',
    component: () => import(/* webpackChunkName: "CardView" */ '../views/PreguntaView.vue')
  },
  {
    path: '/pelicula',
    name: 'PeliculaVue',
    component: () => import(/* webpackChunkName: "CardView" */ '../views/PeliculaView.vue')
  },
   {
    path: '/responsivo',
    name: 'ComponenteResponsivo',
    component: () => import(/* webpackChunkName: "CardView" */ '../views/ResponsivoView.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
