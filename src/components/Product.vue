<template>
	<div class="product">
		<img :src="require(`@/assets/img/${data.src}`)" :alt="data.title" class="w-100">
		<h3 class="title">{{ data.title }}</h3>
		<div class="price">$<span>{{ data.price }}</span></div>
	</div>
</template>

<script>
export default {
	name: 'Product',
	props: ['data'],
	data() {
		return {
			
		}
	}
}
</script>

<style scoped>
.product {width: 31.3333%; margin: 1%; border: 1px solid #ddd; border-radius: 6px; padding: .5em;}
.title {font-size: 1.5em; padding: .5em; margin-top: .5em; border-top: 1px solid #ddd;}
.price {padding: .75em .5em; font-size: 1.125em; font-weight: bold; color: #333; text-align: right; border-top: 1px dotted #ddd;}
@media screen and (max-width: 768px) {
	.product {width: 48%;}
}
@media screen and (max-width: 576px) {
	.product {width: 98%;}
}
</style>