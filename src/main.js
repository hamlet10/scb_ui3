import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import { registerLicense } from "@syncfusion/ej2-base";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";


/* add icons to the library */
library.add(faUserSecret)
library.add(faLock)
library.add(faCircleArrowRight)

/* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)



registerLicense("ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0djUH5YdHFTRmNZ")

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
