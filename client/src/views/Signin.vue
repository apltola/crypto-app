<template>
  <div>
    <h1>Sign In</h1>
    <AuthForm :authType="'signin'" />
  </div>
</template>

<script>
import AuthForm from '../components/AuthForm';

export default {
  name: 'Signin',

  components: {
    AuthForm,
  },
};
</script>

<style scoped></style>
