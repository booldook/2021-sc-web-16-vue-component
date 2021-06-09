<template>
	<div>
		<Header />
		<div class="container">
			<TitleBar :title="title" :desc="desc" />
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue'
import TitleBar from './components/TitleBar.vue'

export default {
	name: 'App',
	components: { TitleBar, Header },
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