<template>
  <article class="portfolio">
    <h3>{{ portfolio.name }}</h3>
    <div></div>
    <div>
      <div class="row title-row">
        <div>Coin</div>
        <div>Price</div>
        <div>Holdings</div>
      </div>
      <div v-for="holding in portfolio.holdings" :key="holding.id" class="row">
        <div class="coin">
          {{ holding.coin }}
        </div>
        <div class="quantity">
          {{ (Math.random() * 100).toFixed(2) }}
        </div>
        <div>{{ holding.quantity.toFixed(8) }}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Portfolio',

  props: ['portfolio'],
};
</script>

<style scoped>
.portfolio {
  /* border: 1px solid red; */
  width: 85vw;
  max-width: 700px;
  text-align: left;
  padding: 0 20px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
}

.row {
  display: flex;
  flex-flow: row nowrap;
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

.coin {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
