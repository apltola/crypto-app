<template>
  <header class="app-header">
    <div class="header-left">
      <router-link to="/" class="brand">
        crypto.app
      </router-link>
    </div>
    <div class="header-right">
      <div v-if="this.$store.state.currentUser">
        <router-link to="/dashboard" class="dashboard">
          Go To Dashboard
        </router-link>
        <button @click="logout">
          Logout {{ this.$store.state.currentUser.username }}
        </button>
      </div>
      <div v-else>
        <router-link to="/auth/signin" class="signin">
          Sign In
        </router-link>
        <router-link to="/auth/register" class="register">
          Register
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  methods: {
    async logout() {
      await this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
.app-header {
  border: 1.5px solid #e1e4e8;
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
}

.app-header a {
  text-decoration: none;
  color: inherit;
}

.brand {
  font-weight: bold;
  font-size: 20px;
}

.header-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.signin,
.dashboard {
  margin: 0 20px;
}
</style>
