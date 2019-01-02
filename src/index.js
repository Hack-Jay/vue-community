import Vue from 'vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';
import * as colors from 'muse-ui/lib/theme/colors';

import App from './App.vue'

Vue.use(MuseUI);

theme.add('custom-theme', {
	primary: colors.indigo,
	secondary: colors.pinkA200
});

new Vue({
	el: '#app',
	render: h => h(App),
});