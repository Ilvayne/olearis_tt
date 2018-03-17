import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  questions: ['one', 'two', 'three'],
  answers: ['answer 1', 'answer 2', 'answer 3']
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
