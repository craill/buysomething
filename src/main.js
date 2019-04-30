import Vue from 'vue'
import App from './App.vue'
// 导入css样式,如果不用这个变量,可以省略xxx from
// import maincss from './assets/statics/site/css/style.css'
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
