export default {
  newQuestion (state, question) {
    state.questions.push(question)
  },
  newAnswer (state, { questionIndex, answer }) {
    state.questions[questionIndex].answers.push(answer)
  },
  removeQuestion (state, questionIndex) {
    state.questions.splice(questionIndex, 1)
  },
  removeAnswer (state, { questionIndex, answerIndex }) {
    state.questions[questionIndex].answers.splice(answerIndex, 1)
  },
  changeQuestion (state, { questionIndex, question }) {
    state.questions[questionIndex] = question
  },
  changeAnswer (state, { questionIndex, answerIndex, answer }) {
    state.questions[questionIndex].answers[answerIndex] = answer
  }
}
