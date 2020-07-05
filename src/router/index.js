import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import Ueditor from '@/pages/ueditor/Ueditor'
import docStructure from '@/pages/works/docStructure/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld', 
      // component: HelloWorld
      name: 'docStructure',
      component: docStructure
    }, {
      path: '/first',
      name: 'First',
      component: First
    }, {
      path: '/second',
      name: 'Second',
      component: Second
    }, {
      path: '/ueditor',
      name: 'Ueditor',
      component: Ueditor
    }, {
      path: '/works/docstructure',
      name: 'docStructure',
      component: docStructure
    }
  ]
})
