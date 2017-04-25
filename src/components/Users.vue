<template>
	<div>
		<h2>Users View</h2>
		<p>Id => {{ $route.params.id }}</p>
		<button @click="goHome">Go Home!!</button>
	</div>	
</template>
<script>
	export default {
		created(){
			console.log(this.$route.params.id);
		},
		watch: {
	    	'$route' (to, from) {
	     		console.log(to.params.id);
	    	}
	    },
	    methods: {
	    	goHome(){
	    		this.$router.push('/');
	    	}
	    }

	}
</script>