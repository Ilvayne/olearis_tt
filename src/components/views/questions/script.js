import { mapGetters } from 'vuex'
import Question from '@/components/common/question'
import NewQuestion from '@/components/common/new-question'

export default {
  name: 'Questions',
  components: {
    Question,
    NewQuestion
  },
  computed: mapGetters([
    'questions'
  ])
}
