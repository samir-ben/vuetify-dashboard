<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn flat slot="activator" class="warning">Ajouter un projet</v-btn>
    <v-card>
      <v-card-title>
        <h2>Ajouter un nouveau project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form" v-if="this.inputRules">
          <v-text-field v-model="title" label="Titre"  :rules="inputRules"></v-text-field>
          <v-textarea v-model="content" label="Information" :rules="inputRules"></v-textarea>

          <v-menu v-model="menu" :close-on-content-click="false">
            <v-text-field slot="activator"
            clearable label="Date" prepend-icon="date_range">
            </v-text-field>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-btn flat @click="submit" class="warning mx-0 mt-3" :loading="loading">Ajouter</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import format from 'date-fns/format'


export default {
  data() {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
  },
  methods: {
    ...mapActions('projects',['addAProject']),
    submit() {
      if(this.$refs.form.validate()) {
        this.loading = true
        const project = { 
          title: this.title,
          content: this.content,
          due: format(this.due, 'Do MMM YYYY'),
          person: 'Sam',
          status: 'ongoing'
        }
        this.addAProject(project) .then(() => {
      this.loading = false
      this.dialog = false
      this.$emit('projectAdded')
    })
      }
    }

  },
  computed: {
  }
}
</script>

<style scoped>
form {
  background-color: #fff
}
</style>
