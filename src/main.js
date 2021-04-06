import Vue from 'vue'
import App from './App.vue'
// Add Vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Filters
Vue.filter("upperFirstChar", function(value) {
  if (value.length <= 0) {
    return value
  } else {
  return value[0].toUpperCase() + value.slice(1)
  }
})

Vue.filter("toCurrency", function(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
