<template>
	<div class="container">
		<MainTitle />
		<MainTitleProps v-for="v in title" 
		:key="v.headline" 
		:title="v.headline" 
		:desc="v.description" 
		:className="v.className" />
		<div class="img-wrap">
			<FoodList v-for="v in foodList" :key="`${v.src}-${v.id}`" :data="v" />
		</div>
	</div>
</template>

<script>
import MainTitle from './components/MainTitle.vue'
import MainTitleProps from './components/MainTitleProps.vue'
import FoodList from './components/FoodList.vue'

export default {
	name: 'App',
	components: { MainTitle, MainTitleProps, FoodList },
	data() {
		return {
			title: [
				{
					headline: 'Vue 첫걸음',
					description: 'Component에 변수(props) 전달 - bind로 전달',
					className: 'alert-primary'
				},
				{
					headline: 'Vue 두번째 걸음',
					description: 'Component에 변수(props) 전달 - bind로 전달~',
					className: 'alert-danger'
				},
				{
					headline: 'Vue 세번째 걸음',
					description: 'Component에 변수(props) 전달 - bind로 전달~~',
					className: 'alert-warning'
				}
			],
			foodList: [
				{ id: 1, src: '3334.jpg', title: "food1" },
				{ id: 2, src: '3348.jpg', title: "food2" },
				{ id: 3, src: '3360.jpg', title: "food3" },
			]
		}
	}
}
</script>

<style>
.img-wrap {display: flex;}
</style>