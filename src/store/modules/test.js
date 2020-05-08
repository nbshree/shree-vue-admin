const test = {
  namespaced: 'test',
  state: {
    name: 'shree',
    gameList: []
  },
  mutations: {
    ['SET_NAME']: (state, name) => {
      state.name = name;
    },
    ['ADD_GAME']: (state, game) => {
      state.gameList.push(game);
    },
    ['DEL_GAME']: (state, game) => {
      for (let [index, viewItem] of state.gameList.entries()) {
        if (viewItem === game) {
          state.gameList.splice(index, 1);
          break;
        }
      }
    },
    ['DEL_OTHER_GAME']: (state, game) => {
      state.gameList = [game];
    }
  },
  actions: {
    setName({ commit }, { name }) {
      commit('SET_NAME', name);
    },
    add({ commit }, { game }) {
      //假装异步
      return new Promise((resolve)=>{
        commit('ADD_GAME', game);
        resolve()
      })
    },
    delGame({ commit }, { game }) {
      commit('DEL_GAME', game);
    },
    delOtherGame({ commit }, { game }) {
      commit('DEL_OTHER_GAME', game);
    }
  }
};

export default test;
