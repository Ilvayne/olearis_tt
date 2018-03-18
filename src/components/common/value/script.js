export default {
  name: 'Value',
  props: ['question', 'index', 'questionIndex'],
  methods: {
    changeQuestion () {
      this.$store.commit('changeQuestion', { questionIndex: this.questionIndex, question: this.questionData })
    }
  },
  data () {
    return {
      quest: null
    }
  },
  computed: {
    questionData () {
      return this.quest || this.question
    },
    currentValue () {
      return this.questionData[index]
    }
  }
}
