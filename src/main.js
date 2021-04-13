import DefaultLayout from '~/layouts/Default.vue'

import { BootstrapVue, BIconSearch } from 'bootstrap-vue'
import './assets/styles/main.scss'

import VueLuxon from "vue-luxon"

import VuePaginate from 'vue-paginate'

import vSelect from "vue-select"
// import "vue-select/dist/vue-select.css"

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('BIcon', BIconSearch)

  Vue.use(VuePaginate)

  Vue.use(VueLuxon, {
    input: {
        format: "sql"
    },
    output: "date_short"
  });

  Vue.component("v-select", vSelect);

  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
