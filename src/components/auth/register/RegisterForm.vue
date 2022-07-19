<template>
  <div class="row form-div">
    <div class="col-md-4 offset-4">
      <h2 class="text-center">Please, sign in</h2>
      <p class="error">{{error_message}}</p>
      <form @submit.prevent="sendForm">
        <div class="form-group mt-3">
          <label for="name">Name</label>
          <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Your name">
        </div>
        <div class="form-group mt-3">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group mt-3">
          <label for="exampleInputPassword1">Password</label>
          <input autocomplete="off" required v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>

        <div class="form-group mt-3">
          <label for="exampleInputPassword1">Password confirmation</label>
          <input autocomplete="off" required v-model="password_confirmation" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
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
  name: "RegisterForm",

  data() {
    return {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      error_message: null
    }
  },


  methods: {
    sendForm(){
      // process.env.VUE_APP_API_URL

      if(!this.validate()){
        return false;
      }

      const form = new FormData()
      form.append('email', this.email)
      form.append('name', this.name)
      form.append('password', this.password)
      form.append('password_confirmation', this.password_confirmation)

      axios
          .post(process.env.VUE_APP_API_URL + 'register', form)
          .then(res => {
            if(res.data.errors){
              this.error_message = res.data.errors
              return false;
            }

            console.log('success')

            this.saveToken(res.data.access_token)
            this.saveUser(res.data.user)
            router.push('/profile')
          })


    },

    async saveToken(token){
      localStorage.setItem('_token', token)
    },

    async saveUser(user){
      localStorage.setItem('username', user.name)
      localStorage.setItem('email', user.email)
    },


    validate() {
      let validation = true;

      if (!this.email){
        validation = false;
        this.error_message = 'email is required!'
      }

      if (!this.password){
        validation = false;
        this.error_message = 'password is required!'
      }

      if (!this.password_confirmation){
        validation = false;
        this.error_message = 'password confirmation is required!'
      }

      if (!this.name){
        validation = false;
        this.error_message = 'name is required!'
      }


      if (this.password.length < 3){
        validation = false;
        this.error_message = 'password should have at least 4 symbols!'
      }

      if (this.password != this.password_confirmation){
        validation = false;
        this.error_message = 'passwords are not the same'
      }

      return validation;
    }



  },


}
</script>

<style>
.error{color:red}
</style>