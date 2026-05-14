import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'

library.add(faUserSecret, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
