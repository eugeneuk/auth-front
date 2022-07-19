<template>
  <div>
    <Navigation />
    <RegisterForm />
  </div>
</template>

<script>
import Navigation from "@/components/layout/Navigation";
import RegisterForm from "@/components/auth/register/RegisterForm";

export default {
  name: 'Login',
  components: {
    Navigation,
    RegisterForm
  }
}
</script>


<style scoped>
.form-div{
  margin-top: 20px;
}
</style>
