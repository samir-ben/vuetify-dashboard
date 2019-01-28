const state = {
    team: [
        { name: 'The Net Ninja', role: 'Web Front developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web Front developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Manager', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Web Back developer', avatar: '/avatar-5.png' },
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
