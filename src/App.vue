<template>
  <div id="app">
		<topbar color='success' title="Vue.js" />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from '@/components/topbar/topbar.vue'
export default {
	name: 'App',
	components: {
		Topbar
	},
	created() {
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fafafa;
}
</style>