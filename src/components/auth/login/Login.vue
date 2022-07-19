<template>
  <div>
    <Navigation />
    <LoginForm />
  </div>
</template>

<script>
  import Navigation from "@/components/layout/Navigation";
  import LoginForm from "@/components/auth/login/LoginForm";

  export default {
    name: 'Login',
    components: {
      Navigation,
      LoginForm
    }
  }
</script>


<style scoped>
.form-div{
  margin-top: 20px;
}
</style>
