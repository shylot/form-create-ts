import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/*
 * 引入element-ui
 **********************/
import 'element-ui/lib/theme-chalk/index.css';
import Element from 'element-ui';
Vue.use(Element/*, { size: 'small', zIndex: 3000 }*/);

/*
 * 引入form-create
 **********************/


import formCreate from '@form-create/element-ui';
Vue.use(formCreate);

/*
 * 引入dcms
 **********************/
import DcmsUI from 'dcms-ui';
import 'dcms-ui/lib/css/theme-default/index.css';
import 'dcms-ui/lib/dcms-ui.css';
Vue.use(DcmsUI);



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
