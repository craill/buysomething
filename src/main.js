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
import usercenter from './components/usercenter.vue'
import Axios from 'axios';
//2.router-use
Vue.use(VueRouter)
// 3.新建路由规则
const routes=[
  // 页面重定向
  {path:'/',component:index},
  {path:'/index',component:index},
  {path:'/detail/:id',component:detail},
  {path:'/usercenter',component:usercenter},
]
// 4.实例化路由
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false
//在Vue原型中添加$axios,使得每个Vue实例都可以使用axios
Vue.prototype.$axios=Axios
//设置axio基地址
Axios.defaults.baseURL='http://111.230.232.110:8899'
//将日期过滤器抽取为全局过滤器
import moment from 'moment'
Vue.filter('change', value=>{
    return moment(value).format('YYYY年MM月DD日')
})

new Vue({
  render: h => h(App),
  // 5.挂载到vue对象
  router
}).$mount('#app')
