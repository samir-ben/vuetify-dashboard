<template>
  <div class="dashboard">
     <v-layout row wrap>
        <v-flex xs12 class="mt-5">
          <vue-frappe
            v-if="this.label"
            id="test"
            :labels="this.label"
            title="Avancement des projets"
            type="bar"
            :height="300"
            :colors="['#3CB371', '#1E90FF', '#FF6347']"
            :dataSets="this.data">
          </vue-frappe>
        </v-flex>

        <v-flex xs12 sm12 md6 class="mt-5 border-right">
          <vc-donut
          background="white" foreground="grey"
          :size="200" unit="px" :thickness="30"
          hasLegend legendPlacement="top"
          :sections="projetcsDataGraph" :total="this.totalProjects">
            <h1>100%</h1>
        </vc-donut>
        </v-flex>

        <v-flex xs12 sm12 md6 class="mt-5">
          <vc-donut
          background="white" foreground="grey"
          :size="200" unit="px" :thickness="30"
          hasLegend legendPlacement="top"
          :sections="teamDataGraph" :total="this.totalTeam">
          <h1>Team</h1>
        </vc-donut>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import 'vue-css-donut-chart/dist/vcdonut.css';

export default {
  name: 'Dashboard',
  data() {
    return {
      label : [],
      projetcsDataGraph: [
        { label: 'Total projet fini', value: 0, color: 'MediumSeaGreen' },
        { label: 'Total projet en cours', value:0 , color: 'DodgerBlue' },
        { label: 'total projet en retard', value:0, color: 'Tomato' }
      ],
      teamDataGraph: [
        { label: 'Manager', value: 0, color: 'Khaki' },
        { label: 'Développeur Frontend', value:0 , color: 'MediumTurquoise' },
        { label: 'Développeur Backend', value:0, color: 'Tan' },
        { label: 'Designer', value:0, color: 'Plum' }
      ],
      data: [
        { name: "Terminé", chartType: 'bar',values: [] },
        { name: "En cours", chartType: 'bar', values: [] },
        { name: "En retard", chartType: 'bar', values: [] }
      ],
    };
  },
  created() {
  // Add data from getters on donuts chart
  this.projetcsDataGraph[0].value = this.totalProjectsComplete;
  this.projetcsDataGraph[1].value = this.totalProjectsOnGoing;
  this.projetcsDataGraph[2].value = this.totalProjectsOverDue;
  this.teamDataGraph[0].value = this.totalManager;
  this.teamDataGraph[1].value = this.totalFrontDeveloper;
  this.teamDataGraph[2].value = this.totalBackDeveloper;
  this.teamDataGraph[3].value = this.totalDesigner;
  // add data from getters to bar charts
  this.getCompleteByAuthor();
  this.getLabel()
  },
  computed: {
  ...mapGetters(
  'projects', ['projects', 'totalProjects', 'totalProjectsComplete', 'totalProjectsOnGoing', 'totalProjectsOverDue', 'projectStatusByAuthor', 'completed', 'totalCompleteByAuthor', 'totalProjectsByPersonAndStatus', 'nameLabelChart'],

    ),
    ...mapGetters(
  'team', ['totalTeam','totalManager', 'totalFrontDeveloper', 'totalBackDeveloper', 'totalDesigner']
    )
  },
  methods: {
    getCompleteByAuthor(){
      const array1 = [];
      const array2 = [];
      const array3 = [];
      this.totalProjectsByPersonAndStatus.forEach(x => {
        array1.push(x.complete);
        array2.push(x.ongoing);
        array3.push(x.overdue);
      });
      this.data[0].values = array1;
      this.data[1].values = array2;
      this.data[2].values = array3;
    },
    getLabel(){
      this.totalProjectsByPersonAndStatus.forEach(x => {
        this.label.push(x.person);
      });
    }
  },
}
</script>

<style scoped>
.border-right{
  border-right: 1px solid rgb(196, 196, 196);
}
</style>

