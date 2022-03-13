<template>
	<v-app id="app">
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

		<div class="side-panel">
			<slide-out dock="right" :visible.sync="visible" title="The title">
				<div id="chat-container">
					<p>The content</p>
					<v-tollbar flat></v-tollbar>
					<bubble-chat
						:position="chatPosition"
						:messages="messagesList"
						:text-field="'message'"
						:sender-name-field="'username'"
						:avatar-link-field="''"
					>
					</bubble-chat>
				</div>
			</slide-out>
		</div>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			buttonToggle: false,
			visible: false,

			messagesList: [
				{
					username: 'John Doe',
					message: 'Hey guys! How are you?',
					iconUrl: 'link',
				},
			],

			inputContent: '',
		};
	},

	computed: {
		setImage: function () {
			return `<img src="https://robohash.org/${this.inputContent}">`;
		},
	},

	methods: {
		toggleOn: function (toggled) {
			this.buttonToggle = !this.buttonToggle;

			if (!toggled) {
				this.visible = true;
			}

			//console.log(event.target.event);
			//const statusButtonToggle = event.target.value;
			//this.$emit("status-toggle", statusButtonToggle);
		},

		handleInputChange: function (event) {
			this.inputContent = event.target.value;
		},
	},
};
</script>

<style></style>
