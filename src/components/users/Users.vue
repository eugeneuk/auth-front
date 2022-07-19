<template>
  <div>
    <Navigation />
    <div class="container"  v-if="isLoaded">
      <div class="row">
        <div class="col-md-12">
          <h1>List of all users</h1>
          <li v-for="user in users" key="user.id">
            {{user.name}} - {{user.email}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";
import axios from "axios";
import router from "@/router";

export default {
  components: {
    Navigation
  },

  mounted() {
    this.token = localStorage.getItem('_token')
    this.getUsers()

  },
  data(){
    return {
      isLoaded:false,
      users: {}
    }
  },
  methods:{
    getUsers(){
      axios
          .get(
              process.env.VUE_APP_API_URL + 'users',
              {
                headers: {
                  'Authorization': `Bearer ${this.token}`
                }
              }
          )
          .then(res => {
            this.users = res.data.users
            console.log(res.data)
            this.isLoaded = true
          }).catch(e => {
            router.push('/403')
          })
    }
  }
}
</script>

