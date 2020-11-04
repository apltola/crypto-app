import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faTrashAlt,
  faBars,
  faWindowClose,
  faTimes,
  faCaretUp,
  faCaretDown,
  faLongArrowAltLeft,
  faPlusSquare,
  faCog,
  faEdit,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([
  faUserSecret,
  faTrashAlt,
  faBars,
  faWindowClose,
  faTimes,
  faCaretUp,
  faCaretDown,
  faLongArrowAltLeft,
  faPlusSquare,
  faCog,
  faEdit,
  faCheckCircle,
  faTimesCircle,
]);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
