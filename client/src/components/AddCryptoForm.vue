<template>
  <transition name="fade">
    <div v-if="show" class="add-crypto">
      <div>Add Crypto To {{ portfolioName }}</div>
      <form @submit="onSubmit" class="search-form">
        <input type="text" v-model="search" placeholder="Search coins..." />
        <button type="submit">
          Search
        </button>
        <button type="button" @click="clearSearch">
          Clear Search
        </button>
      </form>
      <div class="results">
        <div v-if="loading">
          loading...
        </div>
        <button v-if="result" class="result-item">
          <img :src="result.image.small" class="coin-image" />
          <span class="coin-name">{{ result.name }}</span>
          <span class="coin-symbol">{{ result.symbol }}</span>
        </button>
        <div v-if="error">
          {{ error }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import geckoClient from '../api/coinGecko';

export default {
  name: 'AddCryptoForm',

  props: ['show', 'portfolioName'],

  data() {
    return {
      search: '',
      result: null,
      error: null,
      loading: false,
    };
  },

  methods: {
    async doSearch() {
      this.error = null;
      this.result = null;
      this.loading = true;
      try {
        const res = await geckoClient.get(`/coins/${this.search}`);
        console.log(res.data);
        this.loading = false;
        this.result = res.data;
      } catch (err) {
        this.loading = false;
        this.error = err.response.data.error;
      }
    },

    clearSearch() {
      this.search = '';
      this.result = null;
    },

    async onSubmit(e) {
      e.preventDefault();
      this.doSearch();
    },
  },

  async created() {},
};
</script>

<style scoped>
.add-crypto {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  z-index: 1;
  /* transition: opacity 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95); */
  padding: 20px 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.search-form {
  padding-top: 10px;
}

.results {
  padding-top: 20px;
}

.result-item {
  display: flex;
  align-items: center;
  background: transparent;
  box-shadow: none;
  color: #2c3e50;
  border: none;
  border-bottom: 1px solid #e1e4e8;
  border-top: 1px solid #e1e4e8;
  width: 100%;
  text-align: left;
  font-size: 16px;
  padding: 10px 5px;
  transition: all 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.result-item:hover {
  background: #fafafa;
}

.coin-image {
  height: 25px;
}

.coin-name {
  padding-left: 10px;
  padding-top: 2px;
}

.coin-symbol {
  text-transform: uppercase;
  opacity: 0.7;
  padding-left: 5px;
  padding-top: 2px;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.fade-leave-active {
  transition: opacity 150ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  opacity: 0;
}
</style>
