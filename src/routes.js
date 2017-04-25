import Home from './components/Home.vue';
import Profile from './components/Profile.vue';
import Users from './components/Users.vue';
import Chat from './components/Chat.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/profile', component: Profile },
	{ path: '/users/:id', component: Users },
	{ path: '/chat', component: Chat}
];