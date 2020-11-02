<template>
  <div v-if="this.$store.state.currentUser">
    <h2>Your Account</h2>
    <div class="container">
      <div class="card" style="max-width: 500px">
        <div class="card-header" style="justify-content: center">
          <div>
            <div class="username">
              {{ this.$store.state.currentUser.username }}
            </div>
          </div>
        </div>
        <div class="content">
          <div class="portfolio-label">Portfolios</div>
          <div v-for="p in portfolios" :key="p.id" class="portfolio-list-item">
            <div class="row">
              <span>Portfolio Name</span>
              <span>{{ p.name }}</span>
            </div>
            <div class="holdings-row">
              <div class="holdings-left">{{ p.holdings.length }} holdings</div>
              <div v-if="p.holdings.length > 0" class="holdings-right">
                <span v-for="h in p.holdings" :key="h.id" class="p-holding">
                  <img class="img" :src="h.imgUrl" />
                  {{ h.coinSymbol }}
                </span>
              </div>
            </div>
            <div class="delete-row">
              <button class="delete-button" @click="onDeletePortfolio">
                {{
                  deletePortfolioClicked
                    ? 'Click Again to Confirm Delete'
                    : 'Delete Portfolio'
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router';
import axios from 'axios';

export default {
  name: 'Account',

  data() {
    return {
      portfolios: [],
      deletePortfolioClicked: false,
      confirmDeletePortfolio: false,
    };
  },

  methods: {
    onDeletePortfolio() {
      if (this.deletePortfolioClicked) {
        console.log('delete portfolio!!');
      } else {
        this.deletePortfolioClicked = true;
      }
    },
  },

  mounted() {
    if (this.$store.state.currentUser === null) {
      router.push('/');
    }
  },

  async created() {
    const res = await axios.get('/api/portfolio');
    this.portfolios = res.data;
  },
};
</script>

<style scoped>
.account-card {
  max-width: 500px;
}

.container {
  padding-top: 20px;
}

.username {
  font-weight: bold;
  font-size: 22px;
}

.content {
  padding: 30px 40px 40px;
}

.portfolio-label {
  padding-bottom: 5px;
  border-bottom: 1px solid #e1e4e8;
  font-weight: 500;
}

.portfolio-list-item {
  padding: 15px 5px;
  border-bottom: 1px solid #e1e4e8;
}

.row {
  display: flex;
  justify-content: space-between;
}

.holdings-row {
  display: flex;
  padding-top: 15px;
}

.holdings-left {
  flex: 1;
  padding-top: 2px;
}

.holdings-right {
  flex: 1.5;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}

.p-holding {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding-left: 15px;
  text-transform: uppercase;
}

.img {
  height: 25px;
  margin-right: 3px;
}

.delete-row {
  padding-top: 25px;
  text-align: right;
}

.delete-button {
  border: 2px solid #fc3d39;
  background: white;
  color: #fc3d39;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 15px;
}

@media screen and (max-width: 600px) {
  .content {
    padding: 20px 20px 40px;
  }
}
</style>
