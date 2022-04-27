import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import CardDetailPage from '../components/CardDetailPage'
import AddNews from '../components/AddNewsPage.vue'


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
  },
  {
    path: '/addnews',
    name: 'addnews',
    component: AddNews
  },

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
