<template>
	<div id="app">
		<div class="button-close" id="button-toggle">
			<VueToggles
				height="30"
				width="90"
				margin="100"
				checked-text="Chat On"
				unchecked-text=" Chat Off"
				:value="buttonToggle"
				@click="toggleOn"
			/>
		</div>

		<div id="side-panel">
			<slide-out dock="right" :visible.sync="visible" title="The title">
				<p>The content</p>
			</slide-out>

			<button @click="visible = true">Show</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			buttonToggle: false,
			visible: false,
		};
	},

	methods: {
		toggleOn: function (event) {
			this.buttonToggle = !this.buttonToggle;
			console.log(event.target.event);
			//const statusButtonToggle = event.target.value;
			//this.$emit("status-toggle", statusButtonToggle);
		},
	},
};
</script>

<style>
#app {
	margin-top: 35px;
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
	color: blue;
}
</style>
