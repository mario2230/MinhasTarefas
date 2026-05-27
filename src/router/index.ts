import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router'

import type {
  RouteRecordRaw
} from 'vue-router'

import TabsPage from '@/views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },

  {
    path: '/tabs',
    component: TabsPage,

    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },

      {
        path: 'home',
        component: () =>
          import('@/views/HomePage.vue')
      },

      {
        path: 'tarefas',
        component: () =>
          import('@/views/TarefaPage.vue')
      },

      {
        path: 'tarefas/:id',
        component: () =>
          import('@/views/DetalhePage.vue')
      },

      {
        path: 'perfil',
        component: () =>
          import('@/views/PerfilPage.vue'),

        meta: {
          requerNome: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL
  ),

  routes
})

router.beforeEach(
  (to, _, next) => {
    const nome =
      localStorage.getItem(
        'nomeUsuario'
      )

    if (
      to.meta.requerNome &&
      !nome
    ) {
      next('/tabs/tarefas')
    } else {
      next()
    }
  }
)

export default router