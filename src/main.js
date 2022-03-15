import Vue from 'vue';
import App from './App.vue';

import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';
import 'videojs-flash';
import 'videojs-contrib-hls/dist/videojs-contrib-hls';

import Vuetify from 'vuetify';

import VueToggles from 'vue-toggles';

import Slideout from '@hyjiacan/vue-slideout';
import '@hyjiacan/vue-slideout/lib/slideout.css';

import Chat from 'vue-beautiful-chat';

import BubbleChat from 'vue-bubble-chat';

Vue.use(BubbleChat);

///Button toggle
Vue.component('VueToggles', VueToggles);

Vue.config.productionTip = false;

//SlidePanel
// import Slideout component, and set the defaults props
Vue.use(Slideout, {
	// set default props here
});

//Chat
Vue.component('BubbleChat', BubbleChat);
Vue.use(Chat);

//Vuetify
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

//VuevideoPlayer
Vue.use(VueVideoPlayer);

new Vue({
	el: '#app',
	render: (h) => h(App),
});
