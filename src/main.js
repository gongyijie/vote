import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.use(Mint)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
