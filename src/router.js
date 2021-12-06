import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Posts from './views/Posts.vue'
import Photos from './views/Photos.vue'

Vue.use(Router);

export const routes = [
	{
		path: '/',
		name: 'login',
		component: Login,
		hidden: true,
		
	},
    {
		path: '/posts',
		name: 'posts',
		component: Posts,
		hidden: true,
	},
    {
		path: '/photos',
		name: 'photos',
		component: Photos,
		hidden: true,
	},


	
	
]

const createRouter = () => new Router({
	mode:'hash',
	scrollBehavior: () => ({ y: 0 }),
	routes
})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher 
}

export default router
