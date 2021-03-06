import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeEach((to,from,next)=>{
  store.commit("CLOSE_MENU",false)
 
  next()
}), 


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
