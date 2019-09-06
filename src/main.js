import Vue from 'vue'
import App from './App'
import router from './router'
// 引入ydui-ui   把所有的组件都引入了
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
Vue.use(YDUI);
//引入swiper
import 'swiper/dist/css/swiper.min.css';
Vue.config.productionTip = false
import './assets/js/ydui.flexible'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})