<template>
  <!-- TradingVueJs 101 (example from 'Getting Started' ) -->
  <div class="wrap">
    <CricleSpin v-if="loading" :size="'80px'" />
    <div class="header">
      <div>
        <router-link to="/dashboard">
          <font-awesome-icon icon="long-arrow-alt-left" /> Back to Portfolios
        </router-link>
      </div>
      <div class="title">
        <span class="crypto-name">{{ $route.query.coin }}</span>
        <span class="currency">({{ $route.query.market }})</span>
        <span>{{ chartTitle }}</span>
      </div>
      <div></div>
    </div>
    <div class="container">
      <trading-vue
        :data="chart"
        :width="this.width"
        :height="this.height"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText"
      >
      </trading-vue>
    </div>
  </div>
</template>

<script>
import TradingVue from 'trading-vue-js';
import Data from '../data/data.json';
import axios from 'axios';
import { Circle as CricleSpin } from 'vue-loading-spinner';

export default {
  name: 'app',

  components: { TradingVue, CricleSpin },

  data() {
    return {
      chart: {},
      width: window.innerWidth - (window.innerWidth / 100) * 5,
      height: window.innerHeight - (window.innerHeight / 100) * 35,
      colors: {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#333',
      },
      loading: true,
      error: null,
      chartTitle: 'Daily Chart',
    };
  },

  methods: {
    onResize(event) {
      this.width = window.innerWidth - (window.innerWidth / 100) * 5;
      this.height = window.innerHeight - (window.innerHeight / 100) * 35;
    },

    async fetchData(coin, symbol, market) {
      const res = await axios.get(
        `/api/price/daily?symbol=${symbol}&market=${market}`
      );
      this.chart = res.data;
      this.loading = false;
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('to', to);
    next((vm) => {
      console.log(vm);
      const { coin, symbol, market } = to.query;
      vm.fetchData(coin, symbol, market);
    });
  },

  beforeRouteUpdate(to, from, next) {
    console.log('update');
    /* this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    }) */
  },

  mounted() {
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}

.container {
  border: 1px solid #e1e4e8;
  margin-top: 1.5vh;
}

.header {
  display: flex;
  flex-flow: row nowrap;
}

.header > div {
  flex: 1;
}

.header > div:nth-child(1) {
  text-align: left;
}

.title {
  font-weight: 16px;
  font-weight: bold;
}

.crypto-name {
  text-transform: capitalize;
}

.currency {
  text-transform: uppercase;
  padding-left: 5px;
  padding-right: 10px;
}

.spinner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 99;
}
</style>
