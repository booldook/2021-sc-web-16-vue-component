/*
1. CommonJS(브라우저 밖에서 사용)
내보내기 module.exports = 객체
불러오기 const 변수명 = require('모듈명')

2. ES6
내보내기 exports 객체 exports default
불러오기 import 변수명 from '모듈명'

3. main.js 에서는 전역으로 사용될 css 모듈을 붙인다.
*/

import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
