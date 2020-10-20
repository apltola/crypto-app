<template>
  <section>
    <h1>dashboard</h1>
    <div>
      you are signed in as: {{ this.$store.state.currentUser.username || '' }}
    </div>
  </section>
</template>

<script>
import router from '../router';

export default {
  name: 'Dashboard',

  mounted() {
    if (!this.$store.state.currentUser) {
      router.push('/');
    }
  },
};
</script>

<style></style>
