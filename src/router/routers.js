const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/main'),
  },
  {
    path: '/layout',
    name: 'layout',
    meta: {
      hideInMenu: true,
    },
    component: () => import('@/components/main/component/layout.vue'),
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true,
    },
    component: () => import('@/views/error-page/401.vue'),
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true,
    },
    component: () => import('@/views/error-page/500.vue'),
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true,
    },
    component: () => import('@/views/error-page/404.vue'),
  },
]

export default routes
