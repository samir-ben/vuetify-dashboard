<template>
  <div class="dashboard">
   <vc-donut
    background="white" foreground="grey"
    :size="200" unit="px" :thickness="30"
    hasLegend legendPlacement="top"
    :sections="projetcsDataGraph" :total="this.totalProjects"
  >
    <h1>100%</h1>
  </vc-donut>
  <vc-donut
    background="white" foreground="grey"
    :size="200" unit="px" :thickness="30"
    hasLegend legendPlacement="top"
    :sections="teamDataGraph" :total="this.totalTeam"
  >
    <h1>Team</h1>
  </vc-donut>

    <h1>Dashboard</h1>
    <p>Total projet : {{totalProjects}}</p>
    <p>Total projet fini :{{totalProjectsComplete}}</p>
    <p>Total projet en cours :{{totalProjectsOnGoing}}</p>
    <p>total projet en retard : {{totalProjectsOverDue}}</p>

    <p>Total projet : {{totalTeam}}</p>
    <p>Total projet fini :{{totalManager}}</p>
    <p>Total projet en cours :{{totalFrontDeveloper}}</p>
    <p>total projet en retard : {{totalBackDeveloper}}</p>
    <p>total projet en retard : {{totalDesigner}}</p>
   
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import 'vue-css-donut-chart/dist/vcdonut.css';

  export default {
    name: 'Dashboard',
    data() {
      return {
        projetcsDataGraph: [
          { label: 'Total projet fini', value: 0, color: 'LightGreen' },
          { label: 'Total projet en cours', value:0 , color: 'DeepSkyBlue' },
          { label: 'total projet en retard', value:0, color: 'Crimson' }
        ],
        teamDataGraph: [
          { label: 'Manager', value: 0, color: 'MediumPurple' },
          { label: 'Développeur Frontend', value:0 , color: 'MediumAquaMarine' },
          { label: 'Développeur Backend', value:0, color: 'LightSteelBlue' },
          { label: 'Designer', value:0, color: 'Crimson' }
        ]
      };
    },
    mounted() {
      this.projetcsDataGraph[0].value = this.totalProjectsComplete;
      this.projetcsDataGraph[1].value = this.totalProjectsOnGoing;
      this.projetcsDataGraph[2].value = this.totalProjectsOverDue;
      this.teamDataGraph[0].value = this.totalManager;
      this.teamDataGraph[1].value = this.totalFrontDeveloper;
      this.teamDataGraph[2].value = this.totalBackDeveloper;
      this.teamDataGraph[3].value = this.totalDesigner;
    },
    computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters(
    'projects', ['totalProjects', 'totalProjectsComplete', 'totalProjectsOnGoing', 'totalProjectsOverDue'],

     ),
     ...mapGetters(
    'team', ['totalTeam','totalManager', 'totalFrontDeveloper', 'totalBackDeveloper', 'totalDesigner']
     )
  }
  }
</script>
