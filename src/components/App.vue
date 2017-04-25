<template>
	<div id="app">
		<h1>Hello VueJS</h1>
		<hr>
		<router-link to="/">Home</router-link>
		<router-link to="/profile">Profile</router-link>
		<router-link to="/users/1">Users1</router-link>
		<router-link to="/users/99">Users99</router-link>
		<router-link to="/chat">Chat</router-link>
		
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data () {
			return {
			}
		}
	}
</script>