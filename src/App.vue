<template>
	<div>
		<Header />
		<div class="container">
			<TitleBar :title="title" :desc="desc" />
			<SearchBar />
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
			desc: '',
			product: null,
			data: null,
		}
	},
	async created() {
		try {
			const { data } = await axios.get('/json/product.json')
			this.product = data
			this.data = data
			this.desc = `상품이 ${this.data.length}개 준비되었습니다.`
		}
		catch(err) {
			console.log(err)
		}
	}
}
</script>

<style scoped>

</style>