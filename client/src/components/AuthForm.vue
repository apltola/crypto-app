<template>
  <div class="container">
    <form @submit="onSubmit" class="formi">
      <label for="username">Username</label>
      <input
        type="text"
        name="username"
        v-model="username"
        ref="usernameInput"
      />
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" />
      <label v-if="authType === 'register'" for="confirmpw">
        Confirm Password
      </label>
      <input
        v-if="authType === 'register'"
        type="password"
        name="confirmpw"
        v-model="confirmPw"
      />
      <button
        type="submit"
        class="submit"
        :disabled="username === '' || password === ''"
        :class="{ disabled: username === '' || password === '' }"
      >
        Submit
      </button>
      <div v-if="errors.length > 0" class="error">
        <div v-for="err in errors" :key="err.msg">
          {{ err }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AuthForm',

  props: ['authType'],

  data() {
    return {
      username: '',
      password: '',
      confirmPw: '',
      errors: [],
    };
  },

  methods: {
    async onSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (this.authType === 'register' && this.password !== this.confirmPw) {
        this.errors = ["passwords don't match"];
        return;
      }

      const user = { username: this.username, password: this.password };
      let res = null;
      if (this.authType === 'register') {
        res = await this.$store.dispatch('register', user);
      } else {
        res = await this.$store.dispatch('signin', user);
      }

      if (res.errors) {
        this.errors = res.errors;
      }
    },
  },

  mounted() {
    if (this.$refs.usernameInput) {
      this.$refs.usernameInput.focus();
    }
  },

  destroyed() {
    if (this.$refs.usernameInput) {
      this.$refs.usernameInput.blur();
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.formi {
  min-width: 230px;
  border: 1px solid #e1e4e8;
  text-align: left;
  padding: 25px 30px 30px 30px;
  border-radius: 6px;

  label,
  input,
  button {
    display: block;
    font-size: 16px;
  }

  input {
    margin-bottom: 15px;
    padding: 3px 7px;
    width: calc(100% - 20px);
  }

  .submit {
    margin-top: 15px;
  }

  .error {
    padding-top: 10px;
    color: #fc3d39;
  }
}
</style>
