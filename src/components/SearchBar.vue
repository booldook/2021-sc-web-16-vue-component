<template>
	<div class="wrapper">
		<input v-model="query" type="text" class="form-control" autofocus 
		placeholder="검색할 상품을 입력하세요">
		<i v-show="query.length" @click="onRemove" class="fa fa-times"></i>
	</div>
</template>

<script>
export default {
	name: 'SearchBar',
	data() {
		return {
			query: '',
		}
	},
	methods: {
		onRemove() {
			this.query = ''
		}
	}
}
</script>

<style scoped>
.wrapper {position: relative;}
.fa-times {font-size: 1.25em; position: absolute; top: 50%; transform: translateY(-50%); right: .5em; cursor: pointer;} 
</style>