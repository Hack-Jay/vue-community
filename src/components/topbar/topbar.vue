<template>
	<div class="page">
		<mu-appbar style="width: 100%;" :title="title" :color="color" >
			<mu-button flat slot="right" @click="toLogin">登录</mu-button>
		</mu-appbar>
	</div>
</template>

<script>
import './index.css'
export default {
	data() {
		return {

		}
	},
	props: {
		title: String,
		color: String,
		textColor: String
	},
	methods: {
		toLogin() {
			this.$router.push({ name: 'login'})
		}
	},
}
</script>

<style>
</style>
