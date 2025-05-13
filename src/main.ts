import { createApp } from "vue";
import "./sytles/global.scss";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(Quasar).mount("#app");
