<template>
  <section>
    <h1>Your portfolios</h1>
    <div class="grid">
      <transition-group name="list">
        <Portfolio v-for="pf in portfolios" :key="pf.id" :portfolio="pf" />
      </transition-group>
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
  overflow: visible;
}

.list-enter-active,
.list-leave-active {
  transition: all 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
