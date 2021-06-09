<template>
	<div>
		<Header @@selected="onSelected" />
		<div class="container">
			<TitleBar :title="title" :desc="desc" />
			<SearchBar @@change="onChange" />
			<ProductList :data="data" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Header from './components/Header.vue'
import TitleBar from './components/TitleBar.vue'
import SearchBar from './components/SearchBar.vue'
import ProductList from './components/ProductList.vue'

export default {
	name: 'App',
	components: { TitleBar, Header, SearchBar, ProductList },
	data() {
		return {
			title: '상품리스트',
			product: [],
			data: [],
		}
	},
	computed: {
		desc: function() {
			return `상품이 ${this.data.length}개 준비되었습니다.`
		}
	},
	async created() {
		try {
			const { data } = await axios.get('/json/product.json')
			this.product = data
			this.data = data
		}
		catch(err) {
			console.log(err)
		}
	},
	methods: {
		onSelected(cate) {
			this.data = (cate === '') ? this.product : this.product.filter( v => v.cate === cate )
		},
		onChange(str) {
			this.data = this.product.filter( v => v.title.includes(str) )
		},
	}
}
</script>

<style scoped>

</style>