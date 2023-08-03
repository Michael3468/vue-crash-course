import { createApp } from 'vue';
import App from './App.vue';
import $bus from './utils/Events';
import $pages from './data';
import router from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;

app.mount('#app');
