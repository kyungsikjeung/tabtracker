/* eslint-disable */
<template>
  <div>
    <h1>register</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br />
    <button @click="register">register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  // eslint-disable-next-line
  data() {
    return {
      email: "abc",
      password: "123"
    };
  },
  methods: {
    // eslint-disable-next-line
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
      // eslint-disable-next-line
      console.log("register button was clicked");
    }
  }
};
</script>
<style scoped >
</style>
