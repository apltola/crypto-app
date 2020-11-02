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
      this.width = window.innerWidth - 60;
      this.height = window.innerHeight - 500;
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
      width: window.innerWidth - 60,
      height: window.innerHeight - 500,
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
  margin-top: 40px;
}

.container > div {
  flex: 1;
}
</style>
