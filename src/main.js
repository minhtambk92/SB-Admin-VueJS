// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import resource from 'vue-resource'

Vue.use(resource)
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

// Check local storage to handle refreshes
if (window.localStorage) {
  if (store.state.token !== window.localStorage.getItem('token')) {
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

require('./assets/vendor/jquery/jquery.min')
require('./assets/vendor/bootstrap/js/bootstrap.min')
require('./assets/vendor/metisMenu/metisMenu.min')
require('./assets/js/sb-admin-2.min')
