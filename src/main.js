import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import VueLuxon from "vue-luxon";

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.use(VueLuxon, {
    input: {
        format: "sql"
    },
    output: "date_short"
  });

  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
