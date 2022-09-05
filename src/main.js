import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createApp } from 'vue'
import App from './App.vue'

AOS.init();

createApp(App).mount('#app')
