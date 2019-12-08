import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@ionic/core/css/ionic.bundle.css';
// import Ionic from '@ionic/vue';
import { defineCustomElements as Ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core

Vue.use(Ionic);
Vue.config.ignoredElements = [/^ion-//*, /^jeep-/*/];

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
