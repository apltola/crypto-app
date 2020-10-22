<template>
  <div>
    {{ msg }}
    <button @click="doEmit">emit change</button>
  </div>
</template>

<script>
export default {
  props: ["msg"],

  watch: {
    msg: function () {
      console.log("watch msg");
    },
  },

  methods: {
    doEmit() {
      this.$emit("test-emit", "jeejeeje");
    },
  },
};
</script>

<style>
</style>