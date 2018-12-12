import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var state = {
  xDt1: 0,
  xDt2: 0
};

var mutations = {
  dtChange1(state,data) {
    state.xDt1 = data;
  },
  dtChange2(state,data) {
    state.xDt2 = data;
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

export default  store;
