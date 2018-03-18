import { mapMutations } from 'vuex'
import AnswersHolder from '@/components/common/answers-holder'
import ValuesHolder from '@/components/common/values-holder'

export default {
  name: 'Question',
  props: ['question', 'index'],
  components: {
    AnswersHolder,
    ValuesHolder
  },
  methods: {
    changeQuestion () {
      this.$store.commit('changeQuestion', { questionIndex: this.index, question: this.questionData })
    },
    ...mapMutations([
      'removeQuestion'
    ])
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
    isAnswersTab () {
      return this.$route.name.toLowerCase() === 'answers'
    }
  }
}
