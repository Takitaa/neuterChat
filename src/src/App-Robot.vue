<template>
	<div id="App">
		<div>
			Input some letters to see the robots:
			<input v-on:input="handleInputChange" />
		</div>

		<div>
			Output:
			<div v-html="setImage" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'App',

	data() {
		return {
			inputContent: '',
		};
	},

	computed: {
		setImage: function () {
			return `<img src="https://robohash.org/${this.inputContent}">`;
		},
	},

	methods: {
		handleInputChange: function (event) {
			this.inputContent = event.target.value;
		},
	},
};
</script>

<style></style>
