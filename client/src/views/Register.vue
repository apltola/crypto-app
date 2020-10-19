<template>
  <div>
    <h1>Create New Account</h1>
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
