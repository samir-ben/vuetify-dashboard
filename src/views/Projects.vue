
<template>
  <div class="dashboard">
    <h1 class="container subheading grey--text">Liste des projects</h1>
    <v-container class="">
      <v-layout row justify-start class="">
        <v-btn small flat disabled class="right">Trier par</v-btn>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">Nom de project</span>
          </v-btn>
          <span>Trier par nom du project</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">Auteur du projet</span>
          </v-btn>
          <span>Trier par auteur du projet</span>
        </v-tooltip>
         <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('due')" slot="activator">
            <v-icon small left>calendar_today</v-icon>
            <span class="caption text-lowercase">Date du project</span>
          </v-btn>
          <span>Trier par date</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Titre du project</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Auteur</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Date</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2 caption`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  computed: {
    ...mapGetters('projects', ['projects'])
  }
  
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>