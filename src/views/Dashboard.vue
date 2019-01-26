<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>Total projet : {{totalProjects}}</p>
    <p>Total projet fini :{{totalProjectsComplete}}</p>
    <p>Total projet en cours :{{totalProjectsOnGoing}}</p>
    <p>total projet en retard : {{totalProjectsOverDue}}</p>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    name: 'Dashboard',
    computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters('projects', ['totalProjects', 'totalProjectsComplete', 'totalProjectsOnGoing', 'totalProjectsOverDue'])
  }
  }
</script>
