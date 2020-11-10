<template>
  <div class="register">
    <div class="bg-diagonal"></div>
    <h2>Create New Account</h2>
    <AuthForm :authType="'register'" />
  </div>
</template>

<script>
import AuthForm from '../components/AuthForm';

export default {
  name: 'Register',

  components: {
    AuthForm,
  },
};
</script>

<style scoped>
h2 {
  color: white;
}

.bg-diagonal {
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  position: absolute;
  z-index: -1;
  height: 750px;
  top: -400px;
  right: 0;
  /* bottom: 65vh; */
  left: 0;
  transform: skewY(-10deg);
}
</style>
