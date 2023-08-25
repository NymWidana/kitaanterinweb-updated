import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router";
//Import Pinia into your config file
import { createPinia } from 'pinia'



createApp(App).use(router).use(createPinia()).mount("#app");
