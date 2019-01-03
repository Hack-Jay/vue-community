import axios from 'axios'

export default {
	state: {
		loginname: ''
	},
	mutations: {
		['user/userinfo'](state, res) {

		}
	},
	actions: {
		async ['user/login'](context, payload) {
			let res = await axios.post('/accesstoken', {
				token: payload
			})
			return res
		},
		async ['user/userInfo'](context, payload) {
			let res = await axios.get(`/user/${loginname}`)
			console.log(res)
			return res
		}
	}
}