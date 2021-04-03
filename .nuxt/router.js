import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _64302a55 = () => interopDefault(import('../client/pages/auth/forgotpassword.vue' /* webpackChunkName: "pages/auth/forgotpassword" */))
const _49af0ea3 = () => interopDefault(import('../client/pages/auth/resetpassword.vue' /* webpackChunkName: "pages/auth/resetpassword" */))
const _6aee2c39 = () => interopDefault(import('../client/pages/auth/signin.vue' /* webpackChunkName: "pages/auth/signin" */))
const _7f8482af = () => interopDefault(import('../client/pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _60630190 = () => interopDefault(import('../client/pages/auth/verify.vue' /* webpackChunkName: "pages/auth/verify" */))
const _ba8a06bc = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7f65adfa = () => interopDefault(import('../client/pages/_shopID/index.vue' /* webpackChunkName: "pages/_shopID/index" */))
const _a78d5de4 = () => interopDefault(import('../client/pages/_shopID/event/index.vue' /* webpackChunkName: "pages/_shopID/event/index" */))
const _c054f7ea = () => interopDefault(import('../client/pages/_shopID/plan/index.vue' /* webpackChunkName: "pages/_shopID/plan/index" */))
const _35899d64 = () => interopDefault(import('../client/pages/_shopID/event/newEvent.vue' /* webpackChunkName: "pages/_shopID/event/newEvent" */))
const _aca3273c = () => interopDefault(import('../client/pages/_shopID/plan/newPlan.vue' /* webpackChunkName: "pages/_shopID/plan/newPlan" */))
const _254b1d07 = () => interopDefault(import('../client/pages/_shopID/event/_resourceID/index.vue' /* webpackChunkName: "pages/_shopID/event/_resourceID/index" */))
const _7593331f = () => interopDefault(import('../client/pages/_shopID/plan/_planID/index.vue' /* webpackChunkName: "pages/_shopID/plan/_planID/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth/forgotpassword",
    component: _64302a55,
    name: "auth-forgotpassword"
  }, {
    path: "/auth/resetpassword",
    component: _49af0ea3,
    name: "auth-resetpassword"
  }, {
    path: "/auth/signin",
    component: _6aee2c39,
    name: "auth-signin"
  }, {
    path: "/auth/signup",
    component: _7f8482af,
    name: "auth-signup"
  }, {
    path: "/auth/verify",
    component: _60630190,
    name: "auth-verify"
  }, {
    path: "/",
    component: _ba8a06bc,
    name: "index"
  }, {
    path: "/:shopID",
    component: _7f65adfa,
    name: "shopID"
  }, {
    path: "/:shopID/event",
    component: _a78d5de4,
    name: "shopID-event"
  }, {
    path: "/:shopID/plan",
    component: _c054f7ea,
    name: "shopID-plan"
  }, {
    path: "/:shopID/event/newEvent",
    component: _35899d64,
    name: "shopID-event-newEvent"
  }, {
    path: "/:shopID/plan/newPlan",
    component: _aca3273c,
    name: "shopID-plan-newPlan"
  }, {
    path: "/:shopID/event/:resourceID",
    component: _254b1d07,
    name: "shopID-event-resourceID"
  }, {
    path: "/:shopID/plan/:planID",
    component: _7593331f,
    name: "shopID-plan-planID"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
