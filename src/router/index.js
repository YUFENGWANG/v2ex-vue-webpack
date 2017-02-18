import Vue from 'vue'
import Router from 'vue-router'
import Top from 'views/Top'
import New from 'views/New'
import ItemView from 'views/ItemView'

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
    component: ItemView
  }]
})
