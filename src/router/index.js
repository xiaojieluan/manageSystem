import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/Login'
import DashBoard from '@/views/dashBoard/dashBoard'
import ProManage from '@/views/Products/ProManage'
import ProStatistics from '@/views/Products/ProStatistics'
import OrderManage from '@/views/Order/OrderManage'
import OrderStatistics from '@/views/Order/OrderStatistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/pro-manage',
      name: 'ProManage',
      component: ProManage
    },
    {
      path: '/pro-statistics',
      name: 'ProStatistics',
      component: ProStatistics
    },
    {
      path: '/order-manage',
      name: 'OrderManage',
      component: OrderManage
    },
    {
      path: '/order-statistics',
      name: 'OrderStatistics',
      component: OrderStatistics
    }
  ]
})
