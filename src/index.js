import Vue from 'vue'
import feather from 'vue-icon'
import store from './store'
Vue.config.productionTip = false
Vue.use(feather, 'v-icon')
export { default as Chat } from './components/Chat.vue';