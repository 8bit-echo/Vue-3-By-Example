import { createStore } from 'vuex';

export default createStore({
  state: {
    // state contains any data which needs to be accessed by multiple components
    globalMessage: 'This message can be accessed from all components',
    joke: '',
  },

  getters: {
    // getters are exactly like "computed", but for global state.
  },
  mutations: {
    // mutations are synchronous changes to the state. they don't need to wait for anything in order to run.
    // Mutations take 2 arguments, the first one is the entire state object defined above. Vue will pass this automatically.
    // the second (optional) argument can be any payload from your app.
    changeGlobalMessage(state, payload) {
      state.globalMessage = payload;
    },

    changeJoke(state, joke) {
      state.joke = joke;
    },
  },
  actions: {
    // actions are mutations that require async operations, like reaching out to an API, setTimeout operations, or promises.
    // actions are passed a context object, which contains a special commit function.
    // This commit function can then perform a mutation to the state when a value is resolved.
    getJoke: async ({ commit }) => {
      const response = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      const { joke } = await response.json();
      commit('changeJoke', joke);
    },
  },
  modules: {},
});
