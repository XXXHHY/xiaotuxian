import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [{
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: [{
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/category/:id',
        name: 'category',
        component: () => import('../views/category')
      },
      {
        path: '/category/sub/:id',
        name: 'sub ',
        component: () => import('../views/category/sub.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/goods')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router