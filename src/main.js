import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueSplide from '@splidejs/vue-splide';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import '@/assets/js/flexible'
const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus,VueSplide)
app.use(router)
app.mount('#app')

