import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/components/Home'], resolve)
    },
    {
      path: '/more',
      name: 'More',
      component: resolve => require(['@/components/More'], resolve),
      children: [
        {
          path: '/product/index',
          name: 'product',
          component: resolve => require(['@/components/Product'], resolve)
        },
        {
          path: '/product/detail',
          name: 'pDetail',
          component: resolve => require(['@/components/Product-detail'], resolve)
        },
        {
          path: '/solution/index',
          name: 'solution',
          component: resolve => require(['@/components/Solution'], resolve)
        },
        {
          path: '/solution/detail',
          name: 'pSolution',
          component: resolve => require(['@/components/Solution-detail'], resolve)
        },
        {
          path: '/support/download',
          name: 'download',
          component: resolve => require(['@/components/Support-child1'], resolve)
        },
        {
          path: '/support/qa',
          name: 'qa',
          component: resolve => require(['@/components/Support-child2'], resolve)
        },
        {
          path: '/support/policy',
          name: 'policy',
          component: resolve => require(['@/components/Support-child3'], resolve)
        },
        {
          path: '/news/index',
          name: 'news',
          component: resolve => require(['@/components/News'], resolve)
        },
        {
          path: '/news/detail',
          name: 'newsDetail',
          component: resolve => require(['@/components/News-detail'], resolve)
        },
        {
          path: '/about/us',
          name: 'us',
          component: resolve => require(['@/components/About-child1'], resolve)
        },
        {
          path: '/about/join',
          name: 'join',
          component: resolve => require(['@/components/About-child2'], resolve)
        },
        {
          path: '/about/contact',
          name: 'contact',
          component: resolve => require(['@/components/About-child3'], resolve)
        }
      ]
    },
    {
      path: '/search/index',
      name: 'search',
      component: resolve => require(['@/components/Search'], resolve)
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
