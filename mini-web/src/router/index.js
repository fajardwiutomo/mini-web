import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import CardDetailPage from '../components/CardDetailPage'


Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'home',
    component: HomePage
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: CardDetailPage
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
