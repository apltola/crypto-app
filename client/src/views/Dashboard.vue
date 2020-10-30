<template>
  <section>
    <h1>Your portfolios</h1>
    <div class="grid">
      <div v-if="portfolios.length === 0" class="no-portfolios">
        {{ noPortfoliosMessage || 'Loading...' }}
      </div>
      <transition-group v-else name="list">
        <Portfolio
          v-for="pf in portfolios"
          :key="pf.id"
          :portfolio="pf"
          v-on:update-portfolio="updatePortfolio"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
import router from '../router';
import axios from 'axios';
import Portfolio from '../components/Portfolio.vue';

export default {
  name: 'Dashboard',

  components: {
    Portfolio,
  },

  data() {
    return {
      portfolios: [],
      noPortfoliosMessage: '',
    };
  },

  methods: {
    async updatePortfolio(portfolio) {
      const newArr = [...this.portfolios];
      const i = newArr.findIndex((p) => p.id === portfolio.id);
      newArr[i] = portfolio;
      this.portfolios = newArr;
    },
  },

  mounted() {
    if (!this.$store.state.currentUser) {
      router.push('/');
    }
  },

  async created() {
    if (this.$store.state.currentUser) {
      //fetch portfolios for user
      const res = await axios.get('/api/portfolio');
      this.portfolios = res.data;
      if (res.data.length === 0) {
        this.noPortfoliosMessage = 'No portfolios';
      }
    }
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px 0px;
  overflow: visible;
}

.list-enter-active,
.list-leave-active {
  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
