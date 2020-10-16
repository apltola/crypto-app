<template>
  <div class="home">
    <h1>home page</h1>
    <button @click="test">api test</button>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'Home',

  components: {},

  methods: {
    async test() {
      console.log('test');
      const res = await axios.get('/api/test');
      console.log(res.data);
    },
  },
};
</script>
