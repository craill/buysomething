import Vue from 'vue'
import App from './App.vue'
// 引入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

//1.导入路由
import VueRouter from 'vue-router'
// 导入css样式,如果不用这个变量,可以省略xxx from
// import maincss from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'
// 导入组件
import index from './components/index.vue'
import detail from './components/detail.vue'
//2.router-use
Vue.use(VueRouter)
// 3.新建路由规则
const routes=[
  {path:'/index',component:index},
  {path:'/detail',component:detail},
]
// 4.实例化路由
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 5.挂载到vue对象
  router
}).$mount('#app')
