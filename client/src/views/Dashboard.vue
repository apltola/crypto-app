<template>
  <section v-if="this.$store.state.currentUser">
    <div class="header">
      <div class="hide-mobile"></div>
      <h1>Your portfolios</h1>
      <div class="header-right">
        <router-link to="/new-portfolio">
          <button class="create-button">+ Create Portfolio</button>
        </router-link>
      </div>
    </div>
    <div class="grid">
      <div v-if="portfolios.length === 0" class="no-portfolios">
        {{ noPortfoliosMessage || 'Loading...' }}
      </div>
      <transition-group v-else appear name="list">
        <Portfolio
          v-for="(pf, i) in portfolios"
          :key="pf.id"
          :portfolio="pf"
          :addMargin="i > 0"
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
    if (this.$store.state.currentUser === null) {
      router.push('/');
    }
  },

  async created() {
    /* if (this.$store.state.currentUser) {
      //fetch portfolios for user
    } */
    const res = await axios.get('/api/portfolio');
    console.log(res.data);
    this.portfolios = res.data;
    if (res.data.length === 0) {
      this.noPortfoliosMessage = 'No portfolios';
    }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  width: calc(100vw - 40px);
  max-width: 800px;
  margin: 0 auto;
}

.header > div {
  flex: 1;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.create-button {
  border: none;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  color: white;
  font-weight: bold;
  padding: 5px 20px;
}

.create-button:hover {
  background: #00bb9c;
}

.grid {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 30px 0px;
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

@media screen and (max-width: 600px) {
  .hide-mobile {
    display: none;
  }

  .header {
    width: calc(100vw - 20px);
  }
}
</style>
