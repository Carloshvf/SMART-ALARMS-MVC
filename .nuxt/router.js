import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c0bdbc6 = () => interopDefault(import('..\\pages\\alarm\\index.vue' /* webpackChunkName: "pages_alarm_index" */))
const _c4ffe07a = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages_register_index" */))
const _2d9130f8 = () => interopDefault(import('..\\pages\\registered\\index.vue' /* webpackChunkName: "pages_registered_index" */))
const _1d0127fd = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages_detail__id" */))
const _8e6ac192 = () => interopDefault(import('..\\pages\\register\\_id\\index.vue' /* webpackChunkName: "pages_register__id_index" */))
const _1855de74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/alarm",
    component: _5c0bdbc6,
    name: "alarm"
  }, {
    path: "/register",
    component: _c4ffe07a,
    name: "register"
  }, {
    path: "/registered",
    component: _2d9130f8,
    name: "registered"
  }, {
    path: "/detail/:id?",
    component: _1d0127fd,
    name: "detail-id"
  }, {
    path: "/register/:id",
    component: _8e6ac192,
    name: "register-id"
  }, {
    path: "/",
    component: _1855de74,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
