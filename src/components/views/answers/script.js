import { mapGetters } from 'vuex'
import Answer from '@/components/common/answer'

export default {
  name: 'Answers',
  components: {
    Answer
  },
  computed: mapGetters([
    'answers'
  ])

}
