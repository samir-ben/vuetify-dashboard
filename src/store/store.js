import Vue from 'vue';
import Vuex from 'vuex';

import projects from './projects';
import team from './team';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        projects,
        team
    },
});