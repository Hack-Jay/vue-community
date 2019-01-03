import Vue from 'vue'
import VueRouter from 'vue-router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

import App from './App.vue'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)
Vue.use(MuseUI);

theme.add('custom-theme', {
	primary: colors.Green,
	secondary: colors.grey100
});
// theme.use('light')

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});