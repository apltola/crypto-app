<template>
  <header class="app-header">
    <div class="header-left">
      <router-link to="/" class="brand">
        crypto.app
      </router-link>
    </div>
    <div class="header-right">
      <div v-if="this.$store.state.currentUser">
        <div class="hide-mobile">
          <router-link to="/dashboard" class="dashboard">
            View Portfolios
          </router-link>
          <button @click="logout">
            Logout {{ this.$store.state.currentUser.username }}
          </button>
        </div>
        <div class="show-mobile">
          <button class="menu-button" @click="showMenu = !showMenu">
            <font-awesome-icon icon="bars" class="menu-icon" />
          </button>
        </div>
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
    <transition name="fade">
      <div v-if="showMenu" class="show-mobile mobile-menu">
        <div class="mobile-header">
          <button @click="showMenu = !showMenu" class="close-btn">
            <font-awesome-icon icon="times" class="close-icon" />
          </button>
        </div>
        <div class="mobile-menu-links">
          <router-link to="/dashboard" class="menu-dashboard">
            View Portfolios
          </router-link>
          <button @click="logout" class="menu-logout">
            Logout {{ this.$store.state.currentUser.username }}
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    async logout() {
      await this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
.app-header {
  position: relative;
  border-bottom: 1.5px solid #e1e4e8;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
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

.show-mobile {
  display: none;
}

.mobile-menu {
  position: absolute;
  min-height: 100px;
  padding: 20px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #29323c;
  color: white;
  opacity: 0.95;
}

.mobile-menu-links {
  display: flex;
  flex-flow: column nowrap;
}

.mobile-menu-links button,
.mobile-menu-links a {
  display: block;
  color: white;
  font-size: 16px;
  padding: 10px;
}

.mobile-header {
  display: flex;
  justify-content: flex-end;
}

.menu-logout {
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}

.close-btn {
  background: transparent;
  box-shadow: none;
  outline: none;
  border: none;
}

.close-icon {
  color: white;
  font-size: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 150ms cubic-bezier(0.39, 0.575, 0.565, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .hide-mobile {
    display: none;
  }

  .show-mobile {
    display: initial;
  }

  .menu-icon {
    font-size: 20px;
    color: white;
  }

  .menu-button {
    background-color: #00cdac;
    box-shadow: none;
    outline: none;
    padding: 5px 8px;
    border: 1px solid #00cdac;
    border-radius: 0;
  }

  .menu-button:hover {
    background: #00bb9c;
  }
}
</style>
