<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul v-if="!isLogged" class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Login</router-link>
                </li>
                <li  class="nav-item">
                  <router-link class="nav-link" to="/register">Register</router-link>
                </li>
              </ul>
              <ul v-else class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/profile">Profile</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user">User</router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" to="/users">Users</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/logout">Logout</router-link>
                </li>



              </ul>
            </div>
          </div>
        </nav>



      </div>
    </div>
  </div>
  </template>

<script>
  export default {
    name: 'Navigation',
    data(){
      return{
        isLogged: false
      }
    },
    methods:{
      checkToken(){
        if(localStorage.getItem('_token')){
          this.isLogged = true;
        }
      }
    },
    mounted() {
      this.checkToken()
    }

  }
</script>