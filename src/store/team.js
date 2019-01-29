const state = {
    team: [
        { name: 'Kevin Marli', role: 'Web Front developer', avatar: 'avatar_default.png' },
        { name: 'Mathias Molla', role: 'Graphic designer', avatar: '/avatar_default.png' },
        { name: 'Kim Name', role: 'Web Front developer', avatar: '/avatar_default.png' },
        { name: 'Sam ben', role: 'Manager', avatar: '/avatar_default.png' },
        { name: 'Moundir Amar', role: 'Web Back developer', avatar: '/avatar_default.png' },
    ]
};

const getters = {
  team: state => state.team,
  totalTeam: state => state.team.length,
  totalManager: state => {
      let i = state.team.filter(stack => stack.role == 'Manager');
    return i.length;
  },
  totalFrontDeveloper: state => {
      let i = state.team.filter(stack => stack.role == 'Web Front developer');
    return i.length;
  },
    totalBackDeveloper: state => {
        let i = state.team.filter(stack => stack.role == 'Web Back developer');
    return i.length;
  },
  totalDesigner: state => {
      let i = state.team.filter(stack => stack.role == 'Graphic designer');
        return i.length;
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
   
};
