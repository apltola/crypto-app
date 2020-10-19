<template>
  <header class="app-header">
    <div class="header-left">
      <router-link to="/" class="brand">
        crypto.app
      </router-link>
    </div>
    <div class="header-right">
      <router-link to="/auth/signin" class="signin">
        Sign In
      </router-link>
      <router-link to="/auth/register" class="register">
        Register
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.app-header {
  border: 1px solid black;
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
}

.signin {
  margin: 0 20px;
}
</style>
