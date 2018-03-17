import { mapGetters } from 'vuex'
import Question from '@/components/common/question'

export default {
  name: 'Questions',
  computed: mapGetters([
    'questions'
  ]),
  components: {
    Question
  }
}
