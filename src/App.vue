<template>
	<div id="app">
		<div class="toggle" id="button-toggle">
			<VueToggles
				id="toggle"
				height="30"
				width="90"
				margin="100"
				checked-text="Chat On"
				unchecked-text=" Chat Off"
				:value="buttonToggled"
				@click="toggleOn"
			>
			</VueToggles>
		</div>

		<div class="video">
			<VideoPlayer></VideoPlayer>

			<div id="side-panel">
				<slide-out dock="right" :visible.sync="visible" :size="350">
					<!---->
					<div id="chat">
						<p>Welcome to the Chat</p>
						<bubble-chat
							:position="chatPosition"
							:messages="messagesList"
							:text-field="'message'"
							:sender-name-field="'username'"
							:avatar-link-field="'iconUrl'"
						>
						</bubble-chat>
					</div>
				</slide-out>
			</div>
		</div>
	</div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer.vue';

export default {
	name: 'App',
	components: {
		VideoPlayer,
	},

	data() {
		return {
			buttonToggled: false,
			visible: false,
			value: undefined,
			messagesList: [
				{
					username: 'John Doe',
					message: 'Hey guys! How are you?',
					iconUrl: '',
				},
			],
		};
	},
	methods: {
		toggleOn: function (event) {
			this.buttonToggled = !this.buttonToggled;
			this.visible = !this.visible;
		},
	},
};
</script>

<style>
video {
	width: 100%;
	height: auto;
}

.toggle {
	padding: 5px 780px;
	margin: 20px;
}
</style>
