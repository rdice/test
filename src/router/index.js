import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () => import("@/views/home");
const shop = () => import("@/views/shop");
import swiper from '@/views/swiper';
const elem = () => import("@/views/Elem")
const routes = [
  { path: "/", redirect: "/home" },
  { path: '/home', component: home },
  { path: '/shop', component: shop },
  { path: '/swiper', component: swiper },
  { path: '/elem', component: elem }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
