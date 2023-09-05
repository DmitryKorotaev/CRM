import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MessagePlugin from "./utils/Message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

createApp(App).use(store).use(router).use(MessagePlugin).mount("#app");
