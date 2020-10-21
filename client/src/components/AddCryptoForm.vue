<template>
  <transition name="fade">
    <section v-if="show" class="add-crypto">
      add crypto
    </section>
  </transition>
</template>

<script>
export default {
  name: 'AddCryptoForm',

  props: ['show'],
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
