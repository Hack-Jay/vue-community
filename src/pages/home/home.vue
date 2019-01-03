<template>
	<div class='container-body'>
		<mu-row>
			<mu-col span="9">
				<mu-paper class="body-paper" :z-depth="1">
					<!-- 头部导航栏 -->
					<mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" full-width>
						<mu-tab v-for="(item, index) in tabs" :key="index">{{item}}</mu-tab>
					</mu-tabs>
					<!-- 列表内容 -->
					  <mu-list textline="three-line">
							<mu-list-item avatar :ripple="false" button>
								<mu-list-item-action>
									<mu-avatar>
										<img src="https://avatars2.githubusercontent.com/u/26273272?v=4&s=120">
									</mu-avatar>
								</mu-list-item-action>
								<mu-list-item-content>
									<mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
									<mu-list-item-sub-title>
										<span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
									</mu-list-item-sub-title>
								</mu-list-item-content>
							</mu-list-item>
							<mu-divider></mu-divider>
						</mu-list>
				</mu-paper>
			</mu-col>
			<mu-col span="3">
			
			</mu-col>
  	</mu-row>
	</div>
</template>

<script>
import axios from 'axios'
import { tabs } from '@/config/data'
export default {
	data() {
		return {
			active: 0,
			tabs
		}
	},
	components: {
	},
	created() {
		this.$store.dispatch('user/login', '890b4ee4-42fb-4ad4-a271-ef9cf2f81781')
	},
}
</script>

<style lang="less">
.container-body {
	width: 100%;
	padding: 10px 6em;
}
</style>
