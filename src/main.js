import { createApp } from "vue";
import "../scss/custom.css";
import App from "./App.vue";
import routes from "./routes.js";
import "./axios";
import VueToastify from "vue-toastify";

createApp(App).use(routes, VueToastify).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
