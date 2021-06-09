<template>
	<section class="alert alert-primary">
		<h2 class="title">{{ title }}</h2>
		<hr>
		<h3 class="desc">{{ desc }}</h3>
	</section>
</template>

<script>
export default {
	name: 'TitleBar',
	props: ['title', 'desc'],
}
</script>

<style scoped>
	section {margin-top: 1em;}
	h2 {font-size: 1.75em; color: #111; padding: .5em 0 0 .5em;}
	h3 {padding-left: 1em; font-size: 1.25em; color: #777;}
</style>