import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/pages/home/index'
import index from '@/pages/index'
import home from '@/pages/home/index'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import Ueditor from '@/pages/ueditor/Ueditor'
import docStructure from '@/pages/works/docStructure/index'
import learn from '@/pages/learn/index'
import gongwuyuan from '@/pages/learn/gongwuyuan/index'
import pdf from '@/pages/learn/gongwuyuan/pdf'
import it from '@/pages/it/index'
import git from '@/pages/it/git/index'
import react from '@/pages/it/react/index'
import codeDemo from '@/pages/it/codeDemo/index'
import vue from '@/pages/it/vue/index'
import travel from '@/pages/other/travel/index'
import resume from '@/pages/works/resume/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: '/first',
          name: 'First',
          component: First
        },
        {
          path: '/second',
          name: 'Second',
          component: Second
        },
        {
          path: '/ueditor',
          name: 'Ueditor',
          component: Ueditor
        },
        {
          path: '/works/docstructure',
          name: 'docStructure',
          component: docStructure
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
        {
          path: '/it',
          component: it,
          children: [
            {
              path: 'git',
              name: 'git',
              component: git
            },
            {
              path: 'react',
              name: 'react',
              component: react
            },
            {
              path: 'codeDemo',
              name: 'codeDemo',
              component: codeDemo
            },
            {
              path: 'vue',
              name: 'vue',
              component: vue
            },
          ],
        },
        {
          path: 'travel',
          name: 'travel',
          component: travel
        },
        {
          path: '/works/resume',
          name: 'resume',
          component: resume
        },
      ], 
    },
  ],
});
/*
export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld', 
      // component: HelloWorld
      name: 'index',
      component: index
    }, 
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
    // {
    //   path: '/learn/gongwuyuan',
    //   name: 'gongwuyuan',
    //   component: gongwuyuan
    // },
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
    {
      path: '/it',
      component: it,
      children: [
        {
          path: 'git',
          name: 'git',
          component: git
        },
        {
          path: 'react',
          name: 'react',
          component: react
        },
        {
          path: 'codeDemo',
          name: 'codeDemo',
          component: codeDemo
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
*/
