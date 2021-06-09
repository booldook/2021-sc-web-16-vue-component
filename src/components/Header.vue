<template>
	<header>
		<h1 class="logo">SHOP</h1>
		<div class="navi">식품</div>
		<div class="navi">의류</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style scoped>
header {background-color: #353535; color: #fff; display: flex; justify-content: center;}
header > * {padding: 1em 2em;}
header > *:hover {background-color: #fddfba; color: #111;}
.logo {order: 2; font-weight: bold; font-size: 1.125em; margin: 0;}
header > :nth-child(2) {order: 1;}
header > :nth-child(3) {order: 3;}
</style>