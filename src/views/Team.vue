<template>
  <div class="team">
    <h1 class="container subheading grey--text">Team</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3 elevation-2">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img class="avatar" :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="">
              <v-btn flat color="grey">
                <v-icon small >info</v-icon>
                <span class="">Info</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('team', ['team']),
  },
}
</script>

<style scoped>
.avatar {
  border: 3px solid #858585;
}
</style>
