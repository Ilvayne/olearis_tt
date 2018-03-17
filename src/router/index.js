import Vue from 'vue'
import Router from 'vue-router'
import Questions from '@/components/views/questions'
import Answers from '@/components/views/answers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/questions'
    },
    {
      path: '*',
      redirect: '/questions'
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/answers',
      name: 'Answers',
      component: Answers
    }
  ]
})
