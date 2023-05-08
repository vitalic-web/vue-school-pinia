import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import FontAwesomePlugin from "./plugins/FontAwesome";
import "./assets/main.pcss";
import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";
import piniaHistoryPlugin from '@/plugins/PiniaHistoryPlugin';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaHistoryPlugin);

app.use(FontAwesomePlugin);
app.use(pinia);
app.component("AppButton", AppButton);
app.component("AppCountInput", AppCountInput);
app.component("AppModalOverlay", AppModalOverlay);
app.mount("#app");
