<template>
  <div>
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

<style scoped></style>
