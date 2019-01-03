import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import topic from './module/topic'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		user,
		topic
	}
})