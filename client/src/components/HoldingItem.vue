<template>
  <div class="row data-row">
    <div class="coin row-left">
      <img v-if="holding.imgUrl" :src="holding.imgUrl" class="img" />
      {{ holding.coinSymbol }}
    </div>
    <div class="price">
      {{ rate }}
    </div>
    <div class="holding">
      <div>{{ holdingValue }}</div>
      <div class="holding-quantity">{{ holding.quantity }}</div>
    </div>
    <div>
      <router-link
        :to="{
          path: `/portfolio/${portfolioId}/transaction`,
          query: { coin: holding.coinName, symbol: holding.coinSymbol },
        }"
      >
        <button class="button mobile-only">Add</button>
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

  props: ['holding', 'rate', 'holdingValue', 'portfolioId'],

  methods: {
    deleteHolding() {
      this.$emit('delete-holding', this.holding.id, this.holding.coinSymbol);
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  padding: 10px 5px;
}

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

.price,
.holding {
  font-size: 14px;
  font-weight: 500;
}

.holding-quantity {
  opacity: 0.7;
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
  /*   .row > div:nth-last-child(1) {
    flex: 2;
  }

  .row > div {
    flex: 1.5;
  }

  .row .row-left {
    flex: 1;
  } */

  .hide-mobile {
    display: none;
  }

  .mobile-only {
    display: inline;
  }

  .row > div:nth-last-child(1) {
    justify-content: space-around;
  }

  .coin {
    font-size: 12px;
  }

  .img {
    height: 20px;
  }
}
</style>
