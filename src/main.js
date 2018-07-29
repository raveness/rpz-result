
import Vue from 'vue';

import Vulmajs from 'vulmajs';

import 'vulmajs/lib/vulmajs.css';

import App from './App.vue';

Vue.use(Vulmajs);
new Vue({
  el: '#app',
  render: h => h(App)
});
