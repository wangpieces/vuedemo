// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import CountPage from './pages/detail/count'
import ForecastPage from './pages/detail/forecast'
import AnalysisPage from './pages/detail/analysis'
import PublishPage from './pages/detail/publish'

Vue.use(VueResource)
Vue.use(VueRouter)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: IndexPage
		},{
			path: '/detail',
			component: DetailPage,
			redirect: '/detail/count',
			children: [
				{
					path: 'count',
					component: CountPage
				},{
					path: 'forecast',
					component: ForecastPage
				},{
					path: 'analysis',
					component: AnalysisPage
				},{
					path: 'publish',
					component: PublishPage
				}
			]
		}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
