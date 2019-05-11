/*
入口JS
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters' //加载过滤器

//内部自定义一个指令lazy
Vue.use(VueLazyload, {
  loading
})

//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>

new Vue({
  el: '#app',
  render: h => h(App),
  // components: {App},
  // template:'<App/>'
  router,
  store
})
