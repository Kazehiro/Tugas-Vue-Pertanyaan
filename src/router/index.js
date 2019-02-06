import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'
import Soal from '@/components/Soal'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/siswa',
		name: 'Siswa',
		component: Siswa
	},
	{
		path: '/kelas',
		name: 'Kelas',
		component: Kelas
	},
	{
		path: '/soal',
		name: 'Soal',
		component: Soal
	}
	]
}) 