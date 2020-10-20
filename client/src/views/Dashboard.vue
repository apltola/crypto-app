<template>
  <section>
    <h1>dashboard</h1>
    <div class="grid">
      <Portfolio v-for="pf in portfolios" :key="pf.id" :portfolio="pf" />
    </div>
  </section>
</template>

<script>
import router from '../router';
import axios from 'axios';
import Portfolio from '../components/Portfolio.vue';
// https://api.coingecko.com/api/v3

export default {
  name: 'Dashboard',

  components: {
    Portfolio,
  },

  data() {
    return {
      portfolios: [],
    };
  },

  mounted() {
    if (!this.$store.state.currentUser) {
      router.push('/');
    }
  },

  async created() {
    if (this.$store.state.currentUser) {
      // fetch portfolios for user
      const res = await axios.get('/api/portfolio');
      console.log('portfolio -> ', res.data);
      this.portfolios = res.data;
    }
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px;
}
</style>
