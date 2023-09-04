import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
import { store } from './store/index.js';
import ChartPlugin from './plugins/ChartPlugin';

Vue.config.productionTip = false

Vue.use(ChartPlugin,()=>{
  
});

new Vue({
  router,
  store,
  // actions,
  render: h => h(App),
}).$mount('#app')