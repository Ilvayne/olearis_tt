import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  questions: [
    {
      text: 'Question 1',
      type: 'text',
      answers: [
        'answer1'
      ]
    },
    {
      text: 'Question 2',
      type: 'radio',
      values: [],
      answers: []
    },
    {
      text: 'Question 3',
      type: 'select',
      values: [],
      answers: []
    }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
