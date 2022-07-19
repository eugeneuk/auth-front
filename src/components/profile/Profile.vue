<template>
  <div>
    <Secure />
    <Navigation />
    <UserInfo />
  </div>
</template>

<script>
import Secure from "@/components/auth/Secure";
import Navigation from "@/components/layout/Navigation";
import UserInfo from "@/components/profile/UserInfo";
export default {
  name: 'Profile',
  components:{
    Navigation,
    Secure,
    UserInfo
  }
}
</script>