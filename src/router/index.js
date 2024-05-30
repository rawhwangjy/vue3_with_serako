import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutDetail from '../views/AboutDetail.vue'
import TestList from '../views/test/TestList.vue'
import ProjectView from '../views/test/ProjectView.vue'
import TextMustach from '../views/test/list/TextMustach.vue'
import VHTML from '../views/test/list/VHTML.vue'
import Binding from '../views/test/list/Binding.vue'
import Expression from '../views/test/list/Expression.vue'
import Directive from '../views/test/list/Directive.vue'
import StyleBinding from '../views/test/list/StyleBinding.vue'
import ClassBinding from '../views/test/list/ClassBinding.vue'
import Reactivity from '../views/test/list/Reactivity.vue'
import VIf from '../views/test/list/VIf.vue'
import VFor from '../views/test/list/VFor.vue'

// 라우터: 라우트와 라우팅을 관리
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 라우트
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about/:id',
      name: 'aboutDetail',
      component: AboutDetail
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    //
    {
      path: '/test',
      name: 'testList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TestList
    },
    {
      path: '/project',
      name: 'project',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProjectView
    },
    {
      path: '/test/textMustach',
      name: 'textMustach',
      component: TextMustach
    },
    {
      path: '/test/VHTML',
      name: 'vHTML',
      component: VHTML
    },
    {
      path: '/test/binding',
      name: 'binding',
      component: Binding
    },
    {
      path: '/test/expression',
      name: 'expression',
      component: Expression
    },
    {
      path: '/test/directive',
      name: 'directive',
      component: Directive
    },
    {
      path: '/test/styleBinding',
      name: 'styleBinding',
      component: StyleBinding
    },
    {
      path: '/test/classBinding',
      name: 'classBinding',
      component: ClassBinding
    },
    {
      path: '/test/reactivity',
      name: 'reactivity',
      component: Reactivity
    },
    {
      path: '/test/vIf',
      name: 'vIf',
      component: VIf
    },
    {
      path: '/test/vFor',
      name: 'vFor',
      component: VFor
    }
  ]
})
// 라우팅: URL에 따라 컴포넌트를 렌더링하는 과정

export default router
