import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/boostrap.min.css'

import VueSupabase from "vue-supabase";

Vue.use(VueSupabase,{
  supabaseUrl:"https://navwmbnxxpfnsyuuzrtb.supabase.co",
  supabaseKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQyOTk4NDcwLCJleHAiOjE5NTg1NzQ0NzB9.s-v5D-9Nyzb_IOKummljb-Bqb53zIC9J0tCNswYj69s",
  supabaseOptions: {},
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
