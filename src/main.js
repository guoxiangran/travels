// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router/index.js'
import font from './router/font.js'
import './router/directive.js'
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  font,
  template: '<App/>',
  components: { App }
})
