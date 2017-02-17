import Vue from 'vue'
import Router from 'vue-router'
import Top from 'components/Top'
import New from 'components/New'
import itemView from 'components/itemView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Top
  }, {
    path: '/top',
    component: Top
  }, {
    path: '/new',
    component: New
  }, {
    path: '/show/:id',
    component: itemView,
    name: 'show'
  }]
})
