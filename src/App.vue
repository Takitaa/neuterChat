<template>
	<div class="app-container" id="app">
		<div class="toggle" id="button-toggle">
			<VueToggles
				id="toggle"
				height="30"
				width="150"
				margin="100"
				checked-text="Chat On"
				unchecked-text="Chat Off"
				showMask="false"
				overlay="false"
				:value="buttonToggled"
				@click="toggleOn"
			>
			</VueToggles>
		</div>

		<div class="video">
			<VideoPlayer></VideoPlayer>

			<div id="side-panel" size="300">
				<slide-out dock="right" :visible.sync="visible" :size="350">
					<!---->
					<div class="nav-wrapper">
						<nav class="nav" id="nav">
							<div class="default-nav">
								<div class="main-nav">
									<div class="toggleAvatar">
										<VueToggles
											id="avatar-toggle"
											height="25"
											width="120"
											margin="100"
											checked-text=" Avatar changed"
											unchecked-text="Change Avatar"
											:value="buttonAvatar"
											@click="avatarShuffle"
										>
										</VueToggles>
									</div>
									<div class="main-nav-item">Welcome to Chat</div>
								</div>
							</div>
						</nav>
						<div class="inner" id="inner">
							<div class="content" id="chat"></div>
						</div>
						<div class="bottom" id="bottom">
							<textarea class="input" id="mensagem"> </textarea>

							<div class="send" id="enviar"></div>
						</div>
					</div>

					<div id="chat">
						<bubble-chat
							:position="chatPosition"
							:messages="messagesList"
							:text-field="'message'"
							:sender-name-field="'username'"
							:avatar-link-field="'iconUrl:'"
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
			buttonAvatar: false,
			visible: false,
			showMask: false,
			value: undefined,

			inputContent: '',

			messagesList: [
				{
					username: 'John Doe',
					message: 'Hey guys! How are you?',
					iconUrl: 'https://robohash.org/${this.inputContent}',
				},
			],
		};
	},

	computed: {
		setImage: function () {
			return `<img src="https://robohash.org/${this.inputContent}">`;
		},
	},

	methods: {
		toggleOn: function (event) {
			this.buttonToggled = !this.buttonToggled;
			if (this.buttonToggled) {
				this.visible = true;
			}
		},

		avatarShuffle: function (event) {
			this.buttonAvatar = !this.buttonAvatar;
		},

		handleInputChange: function (event) {
			this.inputContent = event.target.value;
		},
	},
};
</script>

<style>
.app {
	width: fit-content;
	block-size: fit-content;
	background-color: #19d476;
	display: inline-block;
	justify-content: center;
}

video {
	height: auto;
	display: inline-block;
}

.toggle {
	padding: 5px 660px;
	margin: 20px;
	display: inline-block;
}

.nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 64px;
	z-index: 100;
	transition: 0.3s ease;
}

.nav .default-nav {
	height: 64px;
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 110;
	background-color: #744d4b;
	border-bottom: 3px solid #ea1c0d;
	color: #fff;
	-webkit-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.1);
	-moz-box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.1);
	box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.1);
	transition: 0.3s ease;
}
.nav .default-nav .main-nav {
	position: absolute;
	left: 0;
	width: 100%;
	height: 64px;
	top: 0;
	margin: 0;
	padding: 0;
	list-style: none;
	transition: 0.3s ease;
}
.nav .default-nav .main-nav .main-nav-item {
	float: left;
	height: 64px;
	margin-right: 50px;
	margin-left: 20px;
	position: relative;
	line-height: 64px;
	transition: 0.3s ease;
}
.nav .default-nav .main-nav .main-nav-item {
	display: inline;
	position: relative;
	height: 4px;
	width: 50%;
	text-align: center;
	line-height: 5px;
	text-decoration: none;
	color: inherit;
	transition: 0.3s ease;
}

.toggleAvatar {
	padding: 10px 215px;
}

.app-button {
	width: 400px;
	min-height: 100px;
	border-radius: 5px;

	font-size: 20px;
	padding: 10pxborder-radius;
	background-color: #795899;
	color: white;
	font-weight: bold;
}

.moda {
	display: none;
	position: fixed;
	z-index: 9999;
	left: 0;
	top: 0;
	width: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.4);
}
</style>
