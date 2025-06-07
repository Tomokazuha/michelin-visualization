import { createRouter, createWebHistory } from 'vue-router'

// 路由组件懒加载
const Dashboard = () => import('@/views/Dashboard.vue')
const MapView = () => import('@/views/MapView.vue')
const Analytics = () => import('@/views/Analytics.vue')
const Explore = () => import('@/views/Explore.vue')
const NotFound = () => import('@/views/NotFound.vue')

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      title: '数据概览',
      icon: 'DataBoard',
      description: '米其林餐厅数据总览和关键指标'
    }
  },
  {
    path: '/map',
    name: 'MapView',
    component: MapView,
    meta: {
      title: '地图分析',
      icon: 'Location',
      description: '全球米其林餐厅地理分布可视化'
    }
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: Analytics,
    meta: {
      title: '深度分析',
      icon: 'TrendCharts',
      description: '聚类分析、趋势预测和深度洞察'
    }
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
    meta: {
      title: '数据探索',
      icon: 'Search',
      description: '交互式数据查询和探索工具'
    }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '页面未找到'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - 米其林餐厅数据可视化`
  }
  
  next()
})

router.afterEach((to, from) => {
  // 页面切换后的处理
  console.log(`路由切换: ${from.path} -> ${to.path}`)
})

export default router