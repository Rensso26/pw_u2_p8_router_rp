import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import PeliculaView from '../views/PeliculaView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'

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
    path: '/Tabla',
    name: 'estudianteTablaView',
    component: EstudianteTablaView
  },
  {
    path: '/Pelicuka',
    name: 'peliculaView',
    component: PeliculaView
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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
