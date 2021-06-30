import { createApp } from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import * as globalProperties from '@/plugin/globalProperties'

const app = createApp(App)

app.config.globalProperties = { ...app.config.globalProperties, ...globalProperties }

app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')

export default app