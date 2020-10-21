<template>
  <article>
    <header class="header">
      <div class="portfolio-title">
        {{ portfolio.name }}
      </div>
      <div class="portfolio-value">
        {{ getPortfolioValue() }}
      </div>
    </header>
    <section class="portfolio">
      <div v-if="portfolio.holdings.length === 0" class="empty">
        No Holdings
      </div>
      <div v-else>
        <div class="row title-row">
          <div>Coin</div>
          <div>token price</div>
          <div>Holdings</div>
        </div>
        <div
          v-for="holding in portfolio.holdings"
          :key="holding.id"
          class="row data-row"
        >
          <div class="coin">
            {{ holding.coin }}
          </div>
          <div class="price">
            {{ formatPrice(holding) }}
          </div>
          <div class="holding">
            <div>{{ formatHolding(holding) }}</div>
            <div class="holding-crypto">{{ holding.quantity }}</div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import geckoApi from '../api/coinGecko';
// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctezos&vs_currencies=eur%2Cusd

export default {
  name: 'Portfolio',

  props: ['portfolio'],

  data() {
    return {
      currency: 'eur',
      coinPrices: null,
      portfolioValue: 0,
    };
  },

  methods: {
    getPortfolioValue() {
      if (!this.coinPrices) {
        return '';
      }

      let sum = 0;
      this.portfolio.holdings.forEach((holding) => {
        sum =
          sum + this.coinPrices[holding.coin][this.currency] * holding.quantity;
      });
      sum = sum.toFixed(2);
      sum = this.formatNumber(sum);

      return `${sum} ${this.getCurrencySymbol()}`;
    },

    getCurrencySymbol() {
      switch (this.currency) {
        case 'eur':
          return '€';
        case 'usd':
          return '$';
        default:
          return '';
      }
    },

    formatNumber(_val) {
      let val = _val.toString();
      val = val.replace('.', ',');
      if (val.split(',')[0].length >= 4) {
        const splitted = val.split(',');
        const start = splitted[0];
        const end = splitted[1];
        let slicePoint = start.length - 3;
        val = `${start.slice(0, slicePoint)} ${start.slice(
          slicePoint,
          start.length
        )},${end}`;
      }

      return val;
    },

    formatPrice(holding) {
      if (!this.coinPrices) {
        return '';
      }

      let price = this.formatNumber(
        this.coinPrices[holding.coin][this.currency]
      );
      return `${price} ${this.getCurrencySymbol()}`;
    },

    formatHolding(holding) {
      if (!this.coinPrices) {
        return '';
      }

      const { quantity, coin } = holding;
      let value = this.coinPrices[coin][this.currency] * quantity;
      //this.portfolioValue = this.portfolioValue + value;
      value = value.toFixed(2);
      value = this.formatNumber(value);
      return `${value} ${this.getCurrencySymbol()}`;
    },
  },

  async created() {
    let coins = '';

    this.portfolio.holdings.forEach((holding) => {
      coins = coins + `${holding.coin},`;
    });

    coins = encodeURIComponent(coins);

    const url = `/simple/price?ids=${coins}&vs_currencies=${this.currency}`;
    const res = await geckoApi.get(url);
    console.log('res -> ', res.data);
    this.coinPrices = res.data;
  },
};
</script>

<style scoped>
.portfolio {
  margin: 0;
  width: 85vw;
  max-width: 700px;
  text-align: left;
  padding: 20px 30px 35px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}

.header {
  text-align: left;
  padding: 20px 30px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  color: #ffffff;
}

.portfolio-value {
  font-size: 20px;
  font-weight: bold;
}

.row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  padding: 10px 0;
}

.row > div {
  flex: 1;
}

.title-row > div {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
}

.price,
.holding {
  font-size: 14px;
  font-weight: 500;
}

.holding-crypto {
  opacity: 0.7;
}

.coin {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
}

.empty {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
}

.button-bar {
  padding-top: 20px;
}

@media screen and (max-width: 600px) {
  .portfolio {
    padding: 15px 15px 25px;
  }
}
</style>
