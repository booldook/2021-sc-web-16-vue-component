<template>
	<div>
		<Header />
		<div class="container">
			<TitleBar :title="title" :desc="desc" />
			<SearchBar />
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import TitleBar from './components/TitleBar.vue'
import SearchBar from './components/SearchBar.vue'

export default {
	name: 'App',
	components: { TitleBar, Header, SearchBar },
	data() {
		return {
			title: '상품리스트',
			desc: '상품이 0개 준비되었습니다.',
		}
	}
}
</script>

<style scoped>

</style>