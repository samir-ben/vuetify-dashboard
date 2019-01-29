<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Project ajouté</span>
      <v-btn color="white" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase orange--text accent-3">
        <span class="font-weight-light">Mon</span>
        <span>Organisation</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <AddProject @projectAdded="snackbar = true" />
        <v-btn flat color="grey" class="nav-link"><router-link :to="{ name: 'Signup' }"><span>Inscription</span></router-link></v-btn>
         <v-btn flat color="grey" class="nav-link"><router-link :to="{ name: 'Login' }"><span>Connexion</span></router-link></v-btn>
        <v-btn flat color="grey"><span>Déconnexion</span>
        <v-icon right>exit_to_app</v-icon></v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center avatar" src="/avatar_default.png">
          </v-avatar>
          <p class="white--text subheading mt-1 text-md-center">Sam Ben</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <AddProject @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import AddProject from '../projects/AddProject'
export default {
  components: { AddProject },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Tableau de bord', route: '/' },
        { icon: 'folder', text: 'Tâches', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ],
      snackbar: false
    }
  }
}
</script>

<style>
nav {
  background-color : #33494A !important;
}
.nav-link a{
  text-decoration: none;
  color: #9E9E9E;
}
.avatar {
  border: 2px solid rgb(211, 128, 3);
}
</style>