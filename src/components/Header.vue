<template>
	<header>
		<h1 class="logo" @click="onClick" data-cate="">SHOP</h1>
		<ul>
			<li class="navi" @click="onClick" data-cate="01">놀라운 상품</li>
			<li class="navi" @click="onClick" data-cate="02">좋은 상품</li>
			<li class="navi" @click="onClick" data-cate="03">질좋은 상품</li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {

		}
	},
	methods: {
		onClick(e) {
			const cate = e.target.dataset['cate']
			this.$emit('@selected', cate)
		}
	}
}
</script>

<style scoped>
header {background-color: #353535; color: #fff; display: flex; justify-content: space-between;}
header .logo {padding: 1em 2em; font-weight: bold; font-size: 1.125em; margin: 0; cursor: pointer;}
header ul {display: flex; list-style: none; margin: 0;}
header .navi {padding: 1em 2em; margin: 0; cursor: pointer;}
header .navi:hover {background-color: #fddfba; color: #111;}
</style>