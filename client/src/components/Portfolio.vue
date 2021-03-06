<template>
  <article
    class="card"
    v-if="portfolio && coinPrices"
    :style="{ marginTop: addMargin ? '65px' : '0' }"
  >
    <header class="card-header">
      <div class="header-left">
        <div class="portfolio-title">
          {{ portfolio.name || '' }}
        </div>
        <div class="portfolio-value">
          {{ calculatePortfolioValue() }}
        </div>
      </div>
      <div class="header-right">
        <router-link
          :to="{ path: `/chart/portfolio/${portfolio.id}` }"
          class="chart-link"
        >
          <font-awesome-icon icon="chart-bar" class="chart-icon" />
        </router-link>
        <button @click="handleToggle" class="add-button">
          {{ view === 'addCrypto' ? 'View Portfolio' : 'Add Crypto' }}
        </button>
      </div>
    </header>

    <section class="container">
      <AddCryptoForm
        :show="view === 'addCrypto'"
        :portfolioName="portfolio.name"
        :portfolioHoldings="portfolio.holdings"
        v-on:add-holding="addHolding"
      />
      <div class="holdings">
        <div v-if="portfolio.holdings.length === 0" class="empty">
          No Holdings
        </div>
        <div v-else>
          <div class="row title-row">
            <div class="row-left">Coin</div>
            <div>Rate</div>
            <div>Holdings</div>
            <div></div>
          </div>
          <HoldingItem
            v-for="holding in portfolio.holdings"
            :key="holding.id"
            :holding="holding"
            :rate="formatPrice(holding)"
            :holdingValue="formatHolding(holding)"
            :rateChange="getCryptoRateChange(holding.coinSymbol)"
            :portfolioId="portfolio.id"
            :currency="currency"
            @delete-holding="deleteHolding"
          />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctezos&vs_currencies=eur%2Cusd
import geckoApi from '../api/coinGecko';
import axios from 'axios';
import AddCryptoForm from './AddCryptoForm.vue';
import HoldingItem from './HoldingItem.vue';
import { getCurrencySymbol, formatNumber } from '../util/portfolio';

export default {
  name: 'Portfolio',

  props: ['portfolio', 'addMargin'],

  components: {
    AddCryptoForm,
    HoldingItem,
  },

  data() {
    return {
      view: 'holdings',
      currency: 'eur',
      coinPrices: null,
    };
  },

  methods: {
    async addHolding(crypto) {
      const { coinName, coinSymbol, imgUrl } = crypto;
      const res = await axios.post(
        `/api/portfolio/${this.portfolio.id}/holding`,
        { coinName: coinName.toLowerCase(), coinSymbol, imgUrl }
      );
      this.$emit('update-portfolio', res.data);
    },

    async deleteHolding(id, symbol) {
      const res = await axios.delete(
        `/api/portfolio/${this.portfolio.id}/holding/${symbol}/${id}`
      );
      this.$emit('update-portfolio', res.data);
    },

    handleToggle() {
      if (this.view === 'holdings') {
        this.view = 'addCrypto';
      } else {
        this.view = 'holdings';
      }
    },

    calculatePortfolioValue() {
      if (!this.coinPrices) {
        return 'loading...';
      }

      let sum = 0;
      this.portfolio.holdings.forEach((holding) => {
        const { coinSymbol } = holding;
        if (this.coinPrices[coinSymbol]) {
          sum =
            sum + this.coinPrices[coinSymbol][this.currency] * holding.quantity;
        }
      });
      sum = sum.toFixed(2);
      sum = formatNumber(sum);

      return `${sum} ${getCurrencySymbol(this.currency)}`;
    },

    getCryptoRateChange(symbol) {
      if (!this.coinPrices || !this.coinPrices[symbol]) {
        return '';
      }

      return this.coinPrices[symbol][`${this.currency}_24h_change`];
    },

    formatPrice(holding) {
      if (!this.coinPrices || !this.coinPrices[holding.coinSymbol]) {
        return '';
      }

      let price = formatNumber(
        this.coinPrices[holding.coinSymbol][this.currency]
      );
      return `${price} ${getCurrencySymbol(this.currency)}`;
    },

    formatHolding(holding) {
      if (!this.coinPrices || !this.coinPrices[holding.coinSymbol]) {
        return '';
      }

      const { quantity, coinName, coinSymbol } = holding;
      let value = this.coinPrices[coinSymbol][this.currency] * quantity;
      //this.portfolioValue = this.portfolioValue + value;
      value = value.toFixed(2);
      value = formatNumber(value);
      return `${value} ${getCurrencySymbol(this.currency)}`;
    },

    async fetchCoinPrices() {
      let coins = '';

      this.portfolio.holdings.forEach((holding) => {
        coins = coins + `${holding.coinSymbol},`;
      });
      const res = await axios.get(`/api/price/current?symbols=${coins}`);
      this.coinPrices = res.data;
    },
  },

  watch: {
    portfolio: async function() {
      console.log('watch portfolio');
      this.fetchCoinPrices();
    },
  },

  async created() {
    if (this.fetchCoinPrices) {
      this.fetchCoinPrices();
    }
  },
};
</script>

<style scoped>
.holdings {
  padding: 20px 30px 45px;
}

.header-right {
  flex: 1;
  text-align: right;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
}

.add-button {
  box-shadow: none;
  background: transparent;
  color: white;
  font-weight: 500;
  border: 2px solid white;
  border-radius: 10px;
  outline: none;
  padding: 2px 10px;
  margin-left: 20px;
}

.add-button:hover {
  background: white;
  color: black;
}

.add-button:active {
  opacity: 0.8;
}

.portfolio-value {
  font-size: 22px;
  font-weight: bold;
}

.row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
}

.title-row {
  padding: 10px 5px;
}

.data-row {
  padding: 15px 5px;
}

.title-row > div {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  flex: 1;
}

.empty {
  padding-top: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
}

.button-bar {
  padding-top: 20px;
}

.container {
  position: relative;
  min-height: 250px;
}

.chart-link {
  color: white;
  display: flex;
  align-items: center;
  font-size: 24px;
  padding-top: 2px;
}

@media screen and (max-width: 600px) {
  .add-button {
    font-size: 13.33px;
  }

  .add-button:hover {
    background: transparent;
    color: white;
  }

  .holdings {
    padding: 15px 15px 25px;
  }

  .header {
    padding: 20px 15px;
  }

  .title-row,
  .data-row {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
