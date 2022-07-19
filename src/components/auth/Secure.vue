<template>
  <div></div>
</template>

<script>
import router from "@/router";
export default {
  name: "Secure",
  beforeCreate() {
    if(!localStorage.getItem('_token')){
      router.push('/')
    }
  }
}
</script>