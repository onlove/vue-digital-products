import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/Index'
import DetailPage from '@/page/detail'
import DetailAnaPage from '@/page/detail/analysis'
import DetailCouPage from '@/page/detail/count'
import DetailForPage from '@/page/detail/forecast'
import DetailPubPage from '@/page/detail/publish'
import OrderList from '@/page/orderList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    },
    {
      path: '/orderList',
      component: OrderList
    }
  ]
})

