<template>
  <article class="portfolio" v-if="portfolio && coinPrices">
    <header class="header">
      <div class="header-left">
        <div class="portfolio-title">
          {{ portfolio.name || "" }}
        </div>
        <div class="portfolio-value">
          {{ getPortfolioValue() }}
        </div>
      </div>
      <div class="header-right">
        <button @click="handleToggle" class="add-button">
          {{ view === "addCrypto" ? "View Portfolio" : "Add Crypto" }}
        </button>
      </div>
    </header>

    <section class="container">
      <AddCryptoForm
        :show="view === 'addCrypto'"
        :portfolioName="portfolio.name"
        v-on:add-holding="addHolding"
      />
      <div class="holdings">
        <div v-if="portfolio.holdings.length === 0" class="empty">
          No Holdings
        </div>
        <div v-else>
          <div class="row title-row">
            <div>Coin</div>
            <div>Rate</div>
            <div>Holdings</div>
          </div>
          <HoldingItem
            v-for="holding in portfolio.holdings"
            :key="holding.id"
            :holding="holding"
            :rate="formatPrice(holding)"
            :holdingValue="formatHolding(holding)"
            @delete-holding="deleteHolding"
          />
          <!-- <div
            v-for="holding in portfolio.holdings"
            :key="holding.id"
            class="row data-row"
          >
            <div class="coin">
              {{ holding.coinSymbol }}
            </div>
            <div class="price">
              {{ formatPrice(holding) }}
            </div>
            <div class="holding">
              <div>{{ formatHolding(holding) }}</div>
              <div class="holding-crypto">{{ holding.quantity }}</div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
  </article>
</template>

<script>
// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctezos&vs_currencies=eur%2Cusd
import geckoApi from "../api/coinGecko";
import axios from "axios";
import AddCryptoForm from "./AddCryptoForm.vue";
import HoldingItem from './HoldingItem.vue';

export default {
  name: "Portfolio",

  props: ["portfolio"],

  components: {
    AddCryptoForm,
    HoldingItem
  },

  data() {
    return {
      view: "holdings",
      currency: "eur",
      coinPrices: null,
    };
  },

  methods: {
    async addHolding(crypto) {
      const { coinName, coinSymbol, imgUrl } = crypto;
      const res = await axios.post(
        `/api/portfolio/${this.portfolio.id}/holding`,
        { coinName: coinName.toLowerCase(), coinSymbol, imgUrl }
      );
      this.$emit("update-portfolio", res.data);
    },

    async deleteHolding(id) {
      const res = await axios.delete(`/api/portfolio/${this.portfolio.id}/holding/${id}`);
      this.$emit("update-portfolio", res.data);
    },

    handleToggle() {
      if (this.view === "holdings") {
        this.view = "addCrypto";
      } else {
        this.view = "holdings";
      }
    },

    getPortfolioValue() {
      if (!this.coinPrices) {
        return "loading...";
      }

      let sum = 0;
      this.portfolio.holdings.forEach((holding) => {
        const { coinName } = holding;
        if (this.coinPrices[coinName]) {
          sum =
            sum +
            this.coinPrices[coinName][this.currency] * holding.quantity;
        }
      });
      sum = sum.toFixed(2);
      sum = this.formatNumber(sum);

      return `${sum} ${this.getCurrencySymbol()}`;
    },

    getCurrencySymbol() {
      switch (this.currency) {
        case "eur":
          return "€";
        case "usd":
          return "$";
        default:
          return "";
      }
    },

    formatNumber(p) {
      let val = p.toString();
      val = val.replace(".", ",");
      if (val.split(",")[0].length >= 4) {
        const splitted = val.split(",");
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
      if (!this.coinPrices || !this.coinPrices[holding.coinName]) {
        return "";
      }

      let price = this.formatNumber(
        this.coinPrices[holding.coinName][this.currency]
      );
      return `${price} ${this.getCurrencySymbol()}`;
    },

    formatHolding(holding) {
      if (!this.coinPrices || !this.coinPrices[holding.coinName]) {
        return "";
      }

      const { quantity, coinName } = holding;
      let value = this.coinPrices[coinName][this.currency] * quantity;
      //this.portfolioValue = this.portfolioValue + value;
      value = value.toFixed(2);
      value = this.formatNumber(value);
      return `${value} ${this.getCurrencySymbol()}`;
    },

    async fetchCoinPrices() {
      let coins = "";

      this.portfolio.holdings.forEach((holding) => {
        coins = coins + `${holding.coinName},`;
      });

      coins = encodeURIComponent(coins);

      const url = `/simple/price?ids=${coins}&vs_currencies=eur,usd`;
      const res = await geckoApi.get(url);
      this.coinPrices = res.data;
    },
  },

  watch: {
    portfolio: async function () {
      console.log("watch portfolio");
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
.portfolio {
  margin: 0;
  width: 95vw;
  max-width: 800px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}

.holdings {
  padding: 20px 30px 35px;
}

.header {
  display: flex;
  flex-flow: row nowrap;
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

.header-right {
  flex: 1;
  text-align: right;
}

.add-button {
  box-shadow: none;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border: 2px solid white;
  border-radius: 4px;
  outline: none;
  transition: 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
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

@media screen and (max-width: 600px) {
  .add-button {
    font-size: 12px;
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

  .coin {
    font-size: 12px;
  }
}
</style>
