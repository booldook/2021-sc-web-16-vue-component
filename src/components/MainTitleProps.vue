<template>
	<div :class="`alert ${className}`">
		<h1 class="title">{{ title }}</h1>
		<hr>
		<p class="desc">{{ desc }}</p>
	</div>
</template>

<script>
export default {
	name: 'MainTitle',
	props: ['title', 'desc', 'className'],
	data() {
		return {
			
		}
	}
}
</script>

<style scoped>
	.title {font-size: 2em; color: #333;}
	.desc {font-size: 1.25em; color: #888;} 
</style>