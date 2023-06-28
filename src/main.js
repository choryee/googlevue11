import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key:'AIzaSyCRGNB_8XHsNrrscB5uv1iMWvTeNd6sXn0'
  },
  installComponents:false
})

new Vue({
  render: h => h(App),
}).$mount('#app')
