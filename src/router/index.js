import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Hello from '../components/Hello.vue'
import MyVue from '../components/MyVue.vue'
import layout from '../components/layout/layout.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/',
    component: layout,
    name: 'MyVue',
    meta: { requiresAuth: false },
    beforeEnter: (to, from, next) => {
      document.body.className += ' skin-blue sidebar-mini'
      next()
    },
    activate: function () {
      this.$nextTick(function () {
        // => 'DOM loaded and ready'
        alert('test')
      })
    },
    children: [
      {
        path: '',
        redirect: '/myvue'
      },
      {
        path: '/myvue',
        name: 'myVue',
        component: MyVue
      }
    ]
  }
]

const router = new Router({
  routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && (store.state.token === null)) {
    next('/login')
  } else if ((store.state.token !== null) && to.path === '/login') {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
