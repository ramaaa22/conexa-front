import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAxios from 'vue-axios';
import axios from 'axios'
import router from "./router";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
