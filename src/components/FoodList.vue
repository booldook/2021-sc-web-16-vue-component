<template>
	<div class="list">
		<img :src="require(`@/assets/img/${data.src}`)" :alt="data.title" class="w-100">
	</div>
</template>

<script>
export default {
	name: 'FoodList',
	props: ['data']
}
</script>

<style scoped>
	.list {width: 32.3333%; margin: .5%;}
</style>