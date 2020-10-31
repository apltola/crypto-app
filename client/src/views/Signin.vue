<template>
  <div>
    <h2>Sign In</h2>
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
