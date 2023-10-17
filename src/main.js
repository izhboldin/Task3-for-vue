import { createApp } from 'vue';
import App from './App.vue';
import globalComponent from './components/globalComponent.vue';

const app = createApp(App);

app.component('global-component',globalComponent )
app.mount('#app');
