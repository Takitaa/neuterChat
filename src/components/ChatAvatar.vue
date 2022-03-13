<template>
	<div>
		<input v-on:input="handleInputChange" />

		<div>
			Output:
			<!--{{setImage}}
<div v-html="setImage" /></div>-->
			{{ inputContent }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'ChatAvatar',

	computed: {
		setImage: function () {
			return `<img src="https://robohash.org/${this.inputRobot}">`;
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
