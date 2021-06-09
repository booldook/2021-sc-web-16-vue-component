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
	watch: {
		query: function (v, l) {
			// watch는 변수를 째려보다가 변수 값이 변화하면 기존값(l), 변화된 값(v)를 담아서 함수를 실행한다.
			this.$emit('@change', v)
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