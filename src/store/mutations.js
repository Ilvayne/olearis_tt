export default {
  newQuestion (state, question) {
    state.questions.push(question)
  },
  newAnswer (state, question) {
    state.answers.push(question)
  },
  removeQuestion (state, questionIndex) {
    state.questions.splice(questionIndex, 1)
  },
  removeAnswer (state, answerIndex) {
    state.answers.splice(answerIndex, 1)
  },
  changeQuestion (state, { questionIndex, question }) {
    state.questions[questionIndex] = question
  },
  changeAnswer (state, { answerIndex, answer }) {
    state.answers[answerIndex] = answer
  }
}
