const state = {
  projects: [
    { title: 'Design a new website by Sam', person: 'Sam Ben', due: '1st Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Code up the homepage', person: 'Kim Name', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Design video thumbnails', person: 'Mathias Molla', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Design by Sam', person: 'Sam Ben', due: '1st Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Create a community forum', person: 'Moundir Amar', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Create an application', person: 'Moundir Amar', due: '20th Oct 2018', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'application', person: 'Kevin Marli', due: '20th Oct 2018', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'Design a new by Sam', person: 'Sam Ben', due: '1st Jan 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
    { title: 'the homepage', person: 'Kim Name', due: '10th Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!' },
  ],
  totalCompleteByAuthor : []
};

const getters = {
  projects: state => state.projects,
  totalCompleteByAuthor: state => state.totalCompleteByAuthor,
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
  },
  nameLabelChart: state => {
    const label = [];
    state.projects.forEach(name => {
      label.push(name.person);
    });
    let i = label.filter(function (item, pos) {
      return label.indexOf(item) == pos;
    })
    return i
  },
  totalProjectsByPersonAndStatus: state => {
    let array = state.projects.reduce((output, { person, status }) => {
      if (output[person]) {
        output[person][status]++
      } else {
        output[person] = {
          person,
          complete: Number(status === 'complete'),
          ongoing: Number(status === 'ongoing'),
          overdue: Number(status === 'overdue')
        }
      }
      return output;
    }, {})
     return Object.values(array)
  },
};

const mutations = {
  ADD_A_PROJECT : (state, project) => {
    state.projects.unshift(project)
  }
};

const actions = {
  addAProject : (context, project) => {
    context.commit('ADD_A_PROJECT', project)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,

};
