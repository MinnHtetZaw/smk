import { createApp } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import App from './App.vue'
import router from './router'
import store from './store'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {  faFacebook ,faInstagram,faLinkedin ,faWhatsapp ,faYoutube ,faTelegram } from '@fortawesome/free-brands-svg-icons'

import VTooltip from 'v-tooltip'
/* add icons to the library */


import SmartTable from 'vuejs-smart-table'
import { DeviceUUID } from 'device-uuid'
import axios from 'axios';
import Vue from 'vue'
import swal from 'sweetalert2';
import "tippy.js/dist/tippy.css";

import VueTippy from 'vue-tippy'

window.Popper = require('@popperjs/core');


window.Swal = swal;
window.$=window.Jquery=require("jquery");
library.add(faUserSecret ,faFacebook ,faInstagram,faLinkedin ,faWhatsapp ,faYoutube ,faTelegram )




createApp(App)  .component("font-awesome-icon", FontAwesomeIcon).use(VTooltip).use(store).use(Jquery).use(router).use(SmartTable).use(
    VueTippy,
    // optional
    // {
    //   directive: 'tippy', // => v-tippy
    //   component: 'tippy', // => <tippy/>
    //   componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    //   defaultProps: {
    //     placement: 'auto-end',
    //     allowHTML: true,
    //   }, // => Global default options * see all props
    // }
  ) .use(VCalendar, {}).mount('#app');
