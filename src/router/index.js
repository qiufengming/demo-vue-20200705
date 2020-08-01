import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import Ueditor from '@/pages/ueditor/Ueditor'
import docStructure from '@/pages/works/docStructure/index'
import learn from '@/pages/learn/index'
import gongwuyuan from '@/pages/learn/gongwuyuan/index'
import pdf from '@/pages/learn/gongwuyuan/pdf'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   // name: 'HelloWorld', 
    //   // component: HelloWorld
    //   name: 'Ueditor',
    //   component: Ueditor
    // }, 
    {
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
    }, 
    {
      path: '/learn/gongwuyuan',
      name: 'gongwuyuan',
      component: gongwuyuan
    },
    {
      path: '/learn',
      component: learn,
      children: [
        {
          path: 'gongwuyuan',
          name: 'gongwuyuan',
          component: gongwuyuan
        },
        {
          path: 'gongwuyuan/pdf',
          name: 'pdf',
          component: pdf
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Ueditor,
    //   children: [
    //     {
    //       path: '/learn',
    //       component: learn,
    //       children: [
    //         {
    //           path: 'gongwuyuan',
    //           name: 'gongwuyuan',
    //           component: gongwuyuan
    //         },
    //         {
    //           path: 'ueditor',
    //           name: 'Ueditor',
    //           component: Ueditor
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]
})
