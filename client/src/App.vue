<template>
  <div id="app">
    <Header :style="{ color: getColor() }" />
    <main class="app-content">
      <router-view />
    </main>
    <footer class="app-footer">
      <div>© allu 2020</div>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import axios from 'axios';
/* import router from './router';

console.log(router.currentRoute.path); */

export default {
  components: {
    Header,
  },

  methods: {
    getColor() {
      const { path } = this.$route;
      if (path === '/' || path.includes('/auth')) {
        return 'white';
      } else {
        return '#2c3e50';
      }
    },
  },

  async created() {
    console.log(this.$route);
    await this.$store.dispatch('fetchCurrentUser');
  },
};
</script>

<style lang="scss">
:root {
  --borderGrey: #e1e4e8;
  --iosLightGreen: #53d769;
  --caribbeanGreen: #00cdac;
  --iosRed: #fc3d39;
  --maize: #ffcf56;
  --cardShadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}

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
    overflow: hidden;
    flex: 1;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 80px;
  }

  .app-footer {
    border-top: 1.5px solid #e1e4e8;
    padding: 20px;
    background-color: white;
    /* margin-top: 80px; */
  }

  button,
  select {
    cursor: pointer;
    font-family: inherit;
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

  input {
    font-family: inherit;
  }

  .card {
    width: calc(100vw - 40px);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    border-radius: 10px;
    -webkit-box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
    background-color: white;
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

  .submit {
    text-transform: capitalize;
    padding: 7px 30px;
    border: none;
    border-radius: 15px;
    box-shadow: none;
    outline: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: #00cdac;
    transition: all 150ms cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  .submit:hover {
    background-color: #00bb9c;
  }

  .submit:active {
    background-color: #00ad91;
  }

  .disabled {
    opacity: 0.5;
  }

  .disabled:hover,
  .disabled:active {
    background-color: #00cdac;
  }

  .bold {
    font-weight: bold;
  }

  .show-mobile {
    display: none;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
    }

    .app-content {
      padding: 20px 5px 80px;
    }

    .card {
      width: calc(100vw - 10px);
    }

    .card-header {
      padding: 20px 15px;
    }

    .submit {
      padding: 6px 40px;
    }

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: initial;
    }
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
