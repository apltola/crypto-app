<template>
  <div class="row data-row">
    <div class="coin row-left">
      <img v-if="holding.imgUrl" :src="holding.imgUrl" class="img" />
      {{ holding.coinSymbol }}
    </div>
    <div>
      <div class="rate">
        {{ rate }}
      </div>
      <div class="rate-change">
        24h /
        <span
          v-if="rateChange"
          :style="{ color: rateChange >= 0 ? '#53d769' : '#fc3d39' }"
        >
          {{ rateChange.toFixed(2) }}%
          <font-awesome-icon
            v-if="rateChange >= 0"
            icon="caret-up"
            class="caret"
          />
          <font-awesome-icon v-else icon="caret-down" class="caret" />
        </span>
      </div>
    </div>
    <div class="holding">
      <div class="holding-value">{{ holdingValue }}</div>
      <div class="holding-quantity">
        {{ holding.quantity.toFixed(8) }}
      </div>
    </div>
    <div>
      <router-link
        :to="{
          path: `/portfolio/${portfolioId}/transaction`,
          query: { coin: holding.coinName, symbol: holding.coinSymbol },
        }"
      >
        <button class="button add-button mobile-only">Add</button>
        <button class="button hide-mobile">Add Transaction</button>
      </router-link>
      <button @click="deleteHolding" class="button delete">
        <font-awesome-icon icon="trash-alt" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoldingItem',

  props: ['holding', 'rate', 'rateChange', 'holdingValue', 'portfolioId'],

  methods: {
    deleteHolding() {
      this.$emit('delete-holding', this.holding.id, this.holding.coinSymbol);
    },
  },
};
</script>

<style scoped>
.row > div {
  flex: 1;
}

.row > div:nth-last-child(1) {
  display: flex;
  justify-content: flex-end;
}

.coin {
  display: flex;
  align-items: center;
}

.img {
  height: 25px;
  margin-right: 8px;
}

.rate,
.holding-value,
.holding-quantity {
  font-weight: 500;
}

.rate,
.holding-value {
  font-size: 16px;
}

.rate-change {
  font-size: 14px;
}

.caret {
  padding-left: 3px;
}

.holding-quantity {
  opacity: 0.7;
  font-size: 14px;
  text-transform: uppercase;
}

.rate-change,
.holding-quantity {
  padding-top: 5px;
}

.coin {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
}

.button {
  background: transparent;
  box-shadow: none;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  padding: 5px 10px;
}

.delete {
  margin-left: 15px;
}

.mobile-only {
  display: none;
}

@media screen and (max-width: 600px) {
  .rate,
  .holding-value {
    font-size: 12px;
  }

  .holding-quantity {
    font-size: 10px;
  }

  .rate-change {
    font-size: 10px;
  }

  .hide-mobile {
    display: none;
  }

  .mobile-only {
    display: inline;
  }

  .row > div:nth-last-child(1) {
    flex-direction: column;
    align-content: stretch;
    align-items: stretch;
  }

  .coin {
    font-size: 12px;
  }

  .img {
    height: 20px;
  }

  .delete {
    margin-left: 0;
    margin-top: 10px;
  }

  .add-button {
    width: 100%;
  }
}
</style>
