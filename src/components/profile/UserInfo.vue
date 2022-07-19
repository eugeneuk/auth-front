<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">Profile</h1>
        <p>Hello, {{user.name}}</p>
        <p>Your email is: {{user.email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";
export default {
  name: "UserInfo",
  data() {
    return {
      user: {},
      token: null
    }
  },
  mounted() {
    this.token = localStorage.getItem('_token')
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      axios
          .get(
              process.env.VUE_APP_API_URL + 'user',
              {
                headers: {
                  'Authorization': `Bearer ${this.token}`
                }
              }
          )
          .then(res => {
              this.user = res.data.data
          }).catch(e => {
              router.push('/')
          })
    }
  }
}
</script>