<template>
  <div class="container">
    <form @submit="onSubmit" class="formi">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="username" />
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" />
      <label v-if="authType === 'register'" for="confirmpw"
        >Confirm Password</label
      >
      <input
        v-if="authType === 'register'"
        type="password"
        name="confirmpw"
        v-model="confirmPw"
      />
      <button type="submit" class="submit">
        Submit
      </button>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div>
        <div>username {{ JSON.stringify(username, null, 2) }}</div>
        <div>password {{ JSON.stringify(password, null, 2) }}</div>
        <div>confirm {{ JSON.stringify(confirmPw, null, 2) }}</div>
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
      error: '',
    };
  },

  methods: {
    async onSubmit(e) {
      e.preventDefault();
      if (this.authType === 'register' && this.password !== this.confirmPw) {
        this.error = "passwords don't match";
        return;
      }

      const user = { username: this.username, password: this.password };
      let res = null;
      if (this.authType === 'register') {
        res = await this.$store.dispatch('register', user);
      } else {
        res = await this.$store.dispatch('signin', user);
      }

      console.log('res.error ', res.error);
      if (res.error) {
        this.error = res.error;
      }

      /* const url =
        this.authType === 'register' ? '/api/auth/signup' : '/api/auth/signin';

      try {
        const res = await axios.post(url, {
          username: this.username,
          password: this.password,
        });
        console.log('user -> ', res.data);
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.error;
        }
      } */
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
}

.formi {
  border: 1px solid #e1e4e8;
  text-align: left;
  padding: 20px 30px;
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
    /* width: 100%; */
  }

  .submit {
    margin-top: 15px;
  }

  .error {
    color: red;
  }
}
</style>
