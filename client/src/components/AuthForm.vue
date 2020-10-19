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
    </form>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',

  props: ['authType'],

  data() {
    return {
      username: '',
      password: '',
      confirmPw: '',
    };
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log('submittia');
      const url =
        this.authType === 'register' ? '/api/auth/signup' : '/api/auth/signin';
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
  /* background: #fafafa; */
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
    margin-bottom: 10px;
    padding: 3px 7px;
  }
}
.submit {
  margin-top: 15px;
}
</style>
