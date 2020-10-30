<template>
  <div class="row data-row">
    <div class="coin">
      <img v-if="holding.imgUrl" :src="holding.imgUrl" class="img" />
      {{ holding.coinSymbol }}
    </div>
    <div class="price">
      {{ rate }}
    </div>
    <div class="holding">
      <div class="holding-value">
        <div>{{ holdingValue }}</div>
        <div class="holding-crypto">{{ holding.quantity }}</div>
      </div>
      <div>
        <button @click="deleteHolding" class="delete-btn">
          <font-awesome-icon icon="trash-alt" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoldingItem',

  props: ['holding', 'rate', 'holdingValue'],

  methods: {
    deleteHolding() {
      this.$emit('delete-holding', this.holding.id);
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

.coin {
  display: flex;
  align-items: center;
}

.img {
  height: 25px;
  margin-right: 5px;
}

.price,
.holding {
  font-size: 14px;
  font-weight: 500;
}

.holding {
  display: flex;
  align-items: center;
}

.holding-value {
  flex: 1;
}

.holding-crypto {
  opacity: 0.7;
}

.coin {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
}

.delete-btn {
  background: transparent;
  box-shadow: none;
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  padding: 5px 10px;
}

@media screen and (max-width: 600px) {
  .coin {
    font-size: 12px;
  }

  .img {
    height: 20px;
  }
}
</style>
