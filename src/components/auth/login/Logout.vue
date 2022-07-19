<template>
  <div></div>
</template>

<script>
import router from "@/router";
export default {
  name: "Logout",
  mounted() {
    this.logout()
  },
  methods:{
    logout(){
      localStorage.removeItem('_token')
      localStorage.removeItem('username')
      localStorage.removeItem('email')

      return router.push('/')
    }
  }
}
</script>