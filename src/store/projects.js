const state = {
  projects: [
    { title: 'Design a new website by Sam', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Create an application', person: 'Gouken', due: '20th Oct 2018', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
  ],
};

const getters = {
  projects: state => state.projects,
  totalProjects: state => state.projects.length,
  totalProjectsComplete: state => {
    let i = state.projects.filter(todo => todo.status == 'complete');
    return i.length;
  },
  totalProjectsOnGoing: state => {
    let i = state.projects.filter(todo => todo.status == 'ongoing');
    return i.length;
  },
  totalProjectsOverDue: state => {
    let i = state.projects.filter(todo => todo.status == 'overdue');
    return i.length;
  }
};

const mutations = {
  // SORT_BY: (state) => {
  //   state.projects.sort((a, b) => (a['title'] > b['title'] ? 1 : -1));
  // }
};

const actions = {
  // sortBy({commit}) {
  //   // Add this:
  //   commit('SORT_BY');
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

};
