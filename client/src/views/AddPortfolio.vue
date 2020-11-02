<template>
  <div v-if="this.$store.state.currentUser">
    <h2>Create New Portfolio</h2>
    <div class="container">
      <form @submit="handleSubmit">
        <input
          type="text"
          placeholder="Portfolio Name"
          ref="inputti"
          v-model="name"
        />
        <button class="submit" :disabled="!name" :class="{ disabled: !name }">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '../router';

export default {
  name: 'AddPortfolio',

  data() {
    return {
      name: '',
    };
  },

  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      await axios.post(
        `/api/portfolio/user/${this.$store.state.currentUser.id}`,
        { name: this.name }
      );
      router.push('/dashboard');
    },
  },

  mounted() {
    if (this.$store.state.currentUser === null) {
      router.push('/');
    }

    if (this.$refs.inputti) {
      this.$refs.inputti.focus();
    }
  },

  destroyed() {
    if (this.$refs.inputti) {
      this.$refs.inputti.blur();
    }
  },
};
</script>

<style scoped>
.container {
  padding-top: 20px;
}

input {
  margin-right: 20px;
  font-size: 24px;
  font-family: inherit;
  font-style: italic;
  border: none;
  padding: 5px 10px;
  border-bottom: 2px solid #e1e4e8;
  outline: none;
}
</style>
