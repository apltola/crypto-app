<template>
  <div v-if="this.$store.state.currentUser">
    <h2>Account</h2>
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
          <div>Portfolios</div>
          <div v-for="p in portfolios" :key="p.id" class="row">
            {{ p.name }}
          </div>
          <div>
            <button>delete account</button>
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
      user: {},
      portfolios: [],
    };
  },

  mounted() {
    this.user = this.$store.state.currentUser;
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

@media screen and (max-width: 600px) {
  .content {
    padding: 20px 20px 40px;
  }
}
</style>
