<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Hello {{user.name}}</h1>
          <form @submit.prevent="updateForm">
            <div class="form-group">
              <label for="">Username</label>
              <input v-model="user.name" @input="showBtn = true" type="text" class="form-control">
            </div>
            <button v-if="showBtn" type="submit" class="btn btn-success mt-3">Save</button>
          </form>
            <button v-if="showBtn" @click="cancelInput" class="ml-15 btn btn-danger mt-3">Cancel</button>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import router from "@/router";
import Navigation from "@/components/layout/Navigation";


export default {
  name: "User",
  components: {
    Navigation
  },

  data() {
    return {
      showBtn: false,
      user: {},
      token: null
    }
  },
  mounted() {
    this.token = localStorage.getItem('_token')
    this.getUserInfo()
  },
  methods:{
    updateForm(){
      const form = new FormData()
      form.append('name', this.user.name)


      axios
          .post(
              process.env.VUE_APP_API_URL + 'user/update-name', form,
              {
                headers: {
                  'Authorization': `Bearer ${this.token}`
                }
              },
          )
          .then(res => {
            this.user = res.data.data

            this.showBtn = false;

            this.$notify({
              title: "Saved",
              text: "The name have been saved",
              type: 'success',
            });



          }).catch(e => {
            localStorage.removeItem('_token')
            router.push('/')
          })


    },
    cancelInput(){
      this.getUserInfo()
    },
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

<style scoped>

</style>