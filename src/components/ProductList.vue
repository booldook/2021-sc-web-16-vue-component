<template>
	<div class="wrapper">
		<Product v-for="v in data" :key="`${v.cate}-${v.id}`" :data="v" />
	</div>
</template>

<script>
import Product from './Product.vue'

export default {
	name: 'ProductList',
	props: ['data'],
	components: { Product },
}
</script>

<style scoped>
.wrapper {display: flex; flex-wrap: wrap; width: 102%; margin-left: -1%;}
</style>