<template>
  <div id="app">
    <!-- <router-view></router-view> -->
		<!-- <home></home> -->
		<mu-button class="demo-color-btn" color="primary"> primary </mu-button>
		<mu-button class="demo-color-btn" color="success"> success </mu-button>
		<mu-button class="demo-color-btn" color="indigo400"> indigo400 </mu-button>
		<mu-button class="demo-color-btn" color="#1565c0"> Custom </mu-button>

		<home />
		<test />
  </div>
</template>

<script>
import Home from './pages/home/home.vue'
import Test from './pages/test/test.vue'
export default {
	name: 'App',
	components: {
		Home,
		Test
	},
	created() {
		console.log('Home:', Home)
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