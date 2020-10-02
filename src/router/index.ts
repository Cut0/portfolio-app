import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Profile from '@/views/Profile.vue'
import Productions from '@/views/Productions.vue'
import Articles from '@/views/Articles.vue'
import Memos from '@/views/Memo.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Profile', component: Profile },
  {
    path: '/Productions',
    name: 'Productions',
    component: Productions
  },
  { path: '/Articles', name: 'Articles', component: Articles },
  { path: '/Memos', name: 'Memos', component: Memos }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
