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
          <router-link to="/dashboard" class="header-link">
            View Portfolios
          </router-link>
          <button @click="logout" class="logout-button">
            Logout {{ this.$store.state.currentUser.username }}
          </button>
        </div>
      </div>
      <div v-else class="hide-mobile">
        <router-link to="/auth/signin" class="header-link">
          Sign In
        </router-link>
        <router-link to="/auth/register" class="register">
          Register
        </router-link>
      </div>
      <div class="show-mobile">
        <button class="menu-button" @click="showMenu = !showMenu">
          <font-awesome-icon icon="bars" class="menu-icon" />
        </button>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showMenu" class="show-mobile mobile-menu">
        <div class="mobile-header">
          <button @click="closeMenu" class="close-btn">
            <font-awesome-icon icon="times" class="close-icon" />
          </button>
        </div>
        <div v-if="this.$store.state.currentUser" class="mobile-menu-links">
          <router-link to="/">
            <button @click="closeMenu">Home</button>
          </router-link>
          <router-link to="/dashboard">
            <button @click="closeMenu">Portfolios</button>
          </router-link>
          <button @click="logout">
            Logout {{ this.$store.state.currentUser.username }}
          </button>
        </div>
        <div v-else class="mobile-menu-links">
          <router-link to="/auth/signin">
            <button @click="closeMenu">Sign In</button>
          </router-link>
          <router-link to="/auth/register">
            <button @click="closeMenu">Create Account</button>
          </router-link>
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
    closeMenu() {
      this.showMenu = false;
    },

    async logout() {
      this.showMenu = false;
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
  align-items: center;
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

.logout-button {
  border: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
}

.header-link {
  margin-right: 30px;
}

.show-mobile {
  display: none;
}

.mobile-menu {
  position: absolute;
  z-index: 1111;
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
}

.mobile-menu-links button {
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  width: 100%;
  padding: 15px;
}

.mobile-header {
  display: flex;
  justify-content: flex-end;
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
    font-size: 24px;
    color: black;
  }

  .menu-button {
    background: transparent;
    box-shadow: none;
    outline: none;
    border: none;
    border-radius: 0;
    display: flex;
    align-items: center;
  }
}
</style>
