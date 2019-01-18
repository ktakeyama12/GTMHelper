import '@babel/polyfill'
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Radio from './components/radio';
Vue.component('vue-radio', Radio)

Vue.config.productionTip = false;
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
