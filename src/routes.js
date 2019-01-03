import Home from '@/pages/home/home.vue'
import Login from '@/pages/login/login.vue'

export default [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		component: Home
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},
]