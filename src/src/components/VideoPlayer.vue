<template>
	<div class="video-player">
		<center>
			<video
				id="video"
				class="video-js"
				width="1050"
				muted="true"
				preload="auto"
				poster="//vjs.zencdn.net/v/oceans.png"
				controls
				data-setup="{}"
				autoplay="true"
			>
				<source
					src="https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
					type="application/x-mpegURL"
				/>
				<p class="vjs-no-js">
					To view this video please enable JavaScript, and consider upgrading to a web browser that
					<a href="http://videojs.com/html5-video-support/" target="_blank"> supports HTML5 video </a>
				</p>
			</video>
		</center>
	</div>
</template>

<script>
export default {
	name: 'VideoPlayer',

	data() {
		return {};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
	width: 100%;
	height: auto;
	/**display: block;
	margin: 0 auto;
	position: absolute;
	top: 50%;
	left: 50%;*/
}

h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
