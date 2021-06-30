import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import * as globalProperties from '@/plugin/globalProperties'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
library.add(faBolt);
library.add(faEye);
library.add(faEyeSlash);
library.add(faColumns);

const app = createApp(App)

app.config.globalProperties = { ...app.config.globalProperties, ...globalProperties }

app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

export default app