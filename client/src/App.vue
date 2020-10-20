<template>
  <div id="app">
    <Header />
    <main class="app-content">
      <router-view />
    </main>
    <footer class="app-footer">
      <div>
        this is the footer
      </div>
      <div>currentUser: {{ this.$store.state.currentUser }}</div>
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
  }

  .app-footer {
    background: #f5f8ff;
    padding: 20px;
  }

  button {
    cursor: pointer;
  }

  button.disabled {
    cursor: not-allowed;
  }
}
</style>
