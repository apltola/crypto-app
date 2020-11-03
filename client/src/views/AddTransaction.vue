<template>
  <div>
    <h2>Add {{ transactionType }} Transaction</h2>
    <div class="container">
      <transition appear name="slide">
        <div class="card" style="max-width: 500px">
          <div class="card-header">
            <button
              @click="transactionType = 'buy'"
              class="toggle"
              :class="[transactionType === 'buy' && 'toggle-active']"
            >
              Buy
            </button>
            <button
              @click="transactionType = 'sell'"
              class="toggle"
              :class="[transactionType === 'sell' && 'toggle-active']"
            >
              Sell
            </button>
          </div>
          <div class="content">
            <form @submit="handleSubmit" class="form">
              <div class="row">
                <span>Crypto</span>
                <span class="crypto-name">{{ coinName }}</span>
              </div>
              <div class="row">
                <label for="currency">{{
                  transactionType === 'buy' ? 'Bought With' : 'Sold For'
                }}</label>
                <select v-model="selectedCurrency">
                  <option disabled value="">Select currency</option>
                  <option v-for="cur in currencies" :key="cur" :value="cur">{{
                    cur
                  }}</option>
                </select>
              </div>
              <div class="row">
                <label for="rate"
                  >Price Per Coin
                  {{ selectedCurrency ? `(${selectedCurrency})` : '' }}</label
                >
                <input
                  type="number"
                  name="rate"
                  v-model="pricePerCoin"
                  step=".01"
                />
              </div>
              <div class="row">
                <label for="qty">Quantity ({{ coinSymbol }})</label>
                <input
                  type="number"
                  name="qty"
                  v-model="quantity"
                  step=".00000001"
                />
              </div>
              <!-- <div class="row">
                <label for="date">Date</label>
                <input type="date" name="date" v-model="date" />
              </div> -->
              <div class="btn-container">
                <button
                  type="submit"
                  class="submit"
                  :class="[submitIsDisabled() && 'disabled']"
                  :disabled="submitIsDisabled()"
                >
                  Save {{ transactionType }} Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import geckoApi from '../api/coinGecko';
import axios from 'axios';
import router from '../router';

export default {
  name: 'AddTransaction',

  data() {
    return {
      transactionType: 'buy',
      coinName: this.$route.query.coin,
      coinSymbol: this.$route.query.symbol,
      quantity: '',
      boughtWith: null,
      soldWith: null,
      pricePerCoin: '',
      currencies: [],
      selectedCurrency: '',
      date: new Date().getTime(),
    };
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      try {
        const res = await axios.post('/api/transaction', {
          portfolioId: this.$route.params.portfolioId,
          type: this.transactionType,
          coinName: this.$route.query.coin,
          coinSymbol: this.$route.query.symbol,
          quantity: this.quantity,
          boughtWith: this.boughtWith,
          soldWith: this.soldWith,
          pricePerCoin: this.pricePerCoin,
          date: this.date,
        });
        router.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },

    submitIsDisabled() {
      if (
        !(this.boughtWith || this.soldWith) ||
        !this.quantity ||
        !this.pricePerCoin ||
        !this.date
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  watch: {
    selectedCurrency: async function() {
      if (this.selectedCurrency) {
        if (this.transactionType === 'buy') {
          this.boughtWith = this.selectedCurrency;
          this.soldWith = null;
        } else {
          this.soldWith = this.selectedCurrency;
          this.boughtWith = null;
        }

        const url = `/simple/price?ids=${this.$route.query.coin}&vs_currencies=${this.selectedCurrency}`;
        const res = await geckoApi.get(url);
        const price =
          res.data[this.$route.query.coin][this.selectedCurrency.toLowerCase()];
        this.pricePerCoin = price;
      }
    },

    transactionType: function() {
      if (this.selectedCurrency) {
        if (this.transactionType === 'buy') {
          this.boughtWith = this.selectedCurrency;
          this.soldWith = null;
        } else {
          this.soldWith = this.selectedCurrency;
          this.boughtWith = null;
        }
      }
    },
  },

  async created() {
    const res = await geckoApi.get('/simple/supported_vs_currencies');
    this.currencies = res.data.map((v) => v.toUpperCase()).sort();
  },
};
</script>

<style scoped>
.container {
  padding-top: 40px;
  overflow: visible;
}

h2 {
  text-transform: capitalize;
}

.card-header {
  display: flex;
  justify-content: center;
}

.toggle {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  box-shadow: none;
  color: white;
  outline: none;
  opacity: 0.8;
  font-weight: bold;
  font-size: 20px;
  padding: 3px;
  margin: 0 15px;
  transition: all 150ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.toggle-active {
  border-bottom: 2px solid white;
  opacity: 1;
}

.content {
  padding: 30px 40px 40px;
}

.form input,
.form label {
  display: block;
}

.row {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e1e4e8;
}

.btn-container {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

/* .submit {
  text-transform: capitalize;
  padding: 7px 30px;
  border: none;
  border-radius: 15px;
  box-shadow: none;
  outline: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
  background-color: #00cdac;
  transition: all 150ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.submit:hover {
  background-color: #00bb9c;
}

.submit:active {
  background-color: #00ad91;
}

.disabled {
  opacity: 0.5;
}

.disabled:hover,
.disabled:active {
  background-color: #00cdac;
} */

.crypto-name {
  text-transform: capitalize;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media screen and (max-width: 600px) {
  .content {
    padding: 20px 20px 40px;
  }

  .toggle {
    font-size: 18px;
  }

  input {
    font-size: 16px;
    max-width: 130px;
  }

  select {
    font-size: 16px;
    max-width: 150px;
  }

  /* .submit {
    padding: 10px 40px;
  } */
}
</style>
