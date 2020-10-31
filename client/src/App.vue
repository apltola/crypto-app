<template>
  <div id="app">
    <Header />
    <main class="app-content">
      <router-view />
    </main>
    <footer class="app-footer">
      <div>this is the footer</div>
      <!-- <div>
        {{ JSON.stringify(this.$store.state.currentUser) }}
      </div> -->
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import axios from 'axios';

export default {
  components: {
    Header,
  },

  async created() {
    await this.$store.dispatch('fetchCurrentUser');
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;

  .app-content {
    flex: 1;
    padding: 20px 20px 80px;
  }

  .app-footer {
    border: 1.5px solid #e1e4e8;
    /* background: #f5f8ff; */
    padding: 20px;
  }

  button,
  select {
    cursor: pointer;
  }

  button.disabled {
    cursor: not-allowed;
  }

  button.btn-reset {
    box-shadow: none;
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
  }

  .card {
    width: calc(100vw - 40px);
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }

  .card-header {
    display: flex;
    flex-flow: row nowrap;
    text-align: left;
    padding: 20px 30px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: linear-gradient(
      -225deg,
      #3d4e81 0%,
      #5753c9 48%,
      #6e7ff3 100%
    );
    color: #ffffff;
  }
}

/* const iosColors = {
  black: '#1c1c1e',
  darkBlue: '#147efb',
  lightBlue: '#5fc9f8',
  red: '#fc3d39',
  green: '#53d769',
  darkGreen: '#30d158',
  yellow: '#fecb2e',
  orange: '#fd9426',
  grey: '#8e8e93'
} */
</style>
