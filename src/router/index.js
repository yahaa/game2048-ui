import Vue from 'vue'
import Router from 'vue-router'
import Wel from '@/components/wel'
import Game from '@/components/game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Wel
    },
    {
      path: '/start',
      name: '/game',
      component: Game
    }
  ]
})
