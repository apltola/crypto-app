<template>
  <!-- TradingVueJs 101 (example from 'Getting Started' ) -->
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
</template>

<script>
import TradingVue from 'trading-vue-js';
import Data from '../data/data.json';

export default {
  name: 'app',
  components: { TradingVue },
  methods: {
    onResize(event) {
      this.width = window.innerWidth - (window.innerWidth / 100) * 3;
      this.height = window.innerHeight - (window.innerHeight / 100) * 20;
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  data() {
    return {
      chart: Data,
      width: window.innerWidth - (window.innerWidth / 100) * 3,
      height: window.innerHeight - (window.innerHeight / 100) * 20,
      colors: {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#333',
      },
    };
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #e1e4e8;
  margin-top: 1.5vh;
}
</style>
