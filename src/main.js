import { createApp } from "vue";
import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MessagePlugin from "./utils/Message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbFxAI6t3GvXHEJ-aNtA-XxFHkuQweylc",
    authDomain: "vue-crm-183a1.firebaseapp.com",
    projectId: "vue-crm-183a1",
    storageBucket: "vue-crm-183a1.appspot.com",
    messagingSenderId: "624685327614",
    appId: "1:624685327614:web:d7b726e039abf9798571af",
    measurementId: "G-2SYB45TZHM"
   };
   // Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

createApp(App).use(store).use(router).use(MessagePlugin).mount("#app");
