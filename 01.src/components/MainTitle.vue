<template>
	<div class="alert alert-info">
		<h1 class="title">{{ title }}</h1>
		<hr>
		<p class="desc">{{ description }}</p>
	</div>
</template>

<script>
export default {
	name: 'MainTitle',
	data() {
		return {
			title: 'Vue 첫걸음',
			description: 'Component 배우기',
		}
	}
}
</script>

<style scoped>
	.title {font-size: 2em; color: #333;}
	.desc {font-size: 1.25em; color: #888;} 
</style>