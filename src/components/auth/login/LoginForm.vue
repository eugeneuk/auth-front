<template>
  <div class="row form-div">
    <div class="col-md-4 offset-4">
      <h2 class="text-center">Please, sign in</h2>
      <p class="error">{{error_message}}</p>
      <form @submit.prevent="sendForm">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input required v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      error_message: null
    }
  },


  methods: {
    sendForm(){
      // process.env.VUE_APP_API_URL

      const form = new FormData()
      form.append('email', this.email)
      form.append('password', this.password)

      axios
          .post(process.env.VUE_APP_API_URL + 'login', form)
          .then(res => {
            if(res.data.errors){
              this.error_message = res.data.errors
              return false;
            }

            console.log('success')

            this.saveToken(res.data.access_token)
            this.saveUser(res.data.user)
            return router.push('/profile')
          })
      },

    async saveToken(token){
      localStorage.setItem('_token', token)
    },

    async saveUser(user){
      localStorage.setItem('username', user.name)
      localStorage.setItem('email', user.email)
    },

  },



}
</script>

<style>
.error{color:red}
</style>