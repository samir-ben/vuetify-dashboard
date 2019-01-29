<template>
  <div class="login container">
    <v-layout row wrap justify-space-around>
      <v-flex xs6>
    <v-form class="mt-5 elevation-7" ref="form">

            <h1>Se connecter</h1>
          <v-text-field v-model="email" label="Email" ></v-text-field>
          <v-text-field v-model="password" label="Mot de passe"></v-text-field>

          <v-spacer></v-spacer>

          <v-btn flat class="warning mx-0 mt-3" >Se connecter</v-btn>
        </v-form>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login(){
     
    }
  }
}
</script>

<style>
form {
    padding: 20px;
    background-color: #fff
}
</style>