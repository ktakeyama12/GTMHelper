import '@babel/polyfill'
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Radio from './components/radio';
import router from './router'
Vue.component('vue-radio', Radio)

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
