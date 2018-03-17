import { mapMutations } from 'vuex'

export default {
  name: 'Question',
  props: ['question', 'index'],
  methods: mapMutations({
    changeQuestion () {
      this.$store.commit('changeQuestion', { question: this.question, index: this.index })
    }
  })
}
