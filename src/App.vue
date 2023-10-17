<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <global-component></global-component>
    <hr>
    <local-component></local-component>
    <hr>
    <notification-component></notification-component>
    <hr>
    <p v-show="bool1">hello show</p>
    <p v-show="bool2">hello if</p>
    <button @click="changeValue">change value</button>
    <hr>
    <div>
      <label for="">Оберіть компонент:</label>
      <select v-model="selecteValue">
        <option value="f">Перший компонент</option>
        <option value="s">Другий компонент</option>
        <option value="t">Третій компонент</option>
      </select>
      <first-component v-if="selecteValue === 'f'"></first-component>
      <second-component v-if="selecteValue === 's'"></second-component>
      <third-component v-if="selecteValue === 't'"></third-component>
    </div>
    <hr>
    <label for="">Введіть не більше 10 символів</label>
    <br>
    <input type="text" v-model="inputValue">
    <button v-bind:disabled="maxValue">Кнопка</button>
    <hr>
  </div>
</template>

<script>
import axios from './axios.js';
import localComponent from './components/localComponent.vue';
import firstComponent from './components/firstComponent.vue';
import secondComponent from './components/secondComponent.vue';
import thirdComponent from './components/thirdComponent.vue';
import notificationComponent from './components/notificationComponent.vue';
axios.get('/todos/1')
  .then(response => {

    console.log(response.data);
  })
  .catch(error => {

    console.error(error);
  });


export default {
  name: 'App',
  components: {
    'local-component': localComponent,
    'first-component': firstComponent,
    'second-component': secondComponent,
    'third-component': thirdComponent,
    'notification-component': notificationComponent,
  },
  data() {
    return {
      bool1: true,
      bool2: false,
      selecteValue: '',
      inputValue: '',
    }
  },
  methods: {
    changeValue() {
      [this.bool1, this.bool2] = [!this.bool1, !this.bool2]
    },
  },
  computed: {
    maxValue() {
      return this.inputValue.length > 10;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
