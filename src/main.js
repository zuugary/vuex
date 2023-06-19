import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";

Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
